# `eksFargateProfile` Submodule <a name="`eksFargateProfile` Submodule" id="@cdktn/provider-awscc.eksFargateProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksFargateProfile <a name="EksFargateProfile" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile awscc_eks_fargate_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_name: str,
  pod_execution_role_arn: str,
  selectors: IResolvable | typing.List[EksFargateProfileSelectors],
  fargate_profile_name: str = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[EksFargateProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Name of the Cluster. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.podExecutionRoleArn">pod_execution_role_arn</a></code> | <code>str</code> | The IAM policy arn for pods. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.selectors">selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#selectors EksFargateProfile#selectors}. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.fargateProfileName">fargate_profile_name</a></code> | <code>str</code> | Name of FargateProfile. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#subnets EksFargateProfile#subnets}. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.clusterName"></a>

- *Type:* str

Name of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#cluster_name EksFargateProfile#cluster_name}

---

##### `pod_execution_role_arn`<sup>Required</sup> <a name="pod_execution_role_arn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.podExecutionRoleArn"></a>

- *Type:* str

The IAM policy arn for pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.selectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#selectors EksFargateProfile#selectors}.

---

##### `fargate_profile_name`<sup>Optional</sup> <a name="fargate_profile_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.fargateProfileName"></a>

- *Type:* str

Name of FargateProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#fargate_profile_name EksFargateProfile#fargate_profile_name}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#subnets EksFargateProfile#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#tags EksFargateProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetFargateProfileName">reset_fargate_profile_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_selectors` <a name="put_selectors" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putSelectors"></a>

```python
def put_selectors(
  value: IResolvable | typing.List[EksFargateProfileSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EksFargateProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]

---

##### `reset_fargate_profile_name` <a name="reset_fargate_profile_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetFargateProfileName"></a>

```python
def reset_fargate_profile_name() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EksFargateProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EksFargateProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksFargateProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksFargateProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EksFargateProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList">EksFargateProfileSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList">EksFargateProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fargateProfileNameInput">fargate_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.podExecutionRoleArnInput">pod_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.selectorsInput">selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fargateProfileName">fargate_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.podExecutionRoleArn">pod_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.selectors"></a>

```python
selectors: EksFargateProfileSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList">EksFargateProfileSelectorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tags"></a>

```python
tags: EksFargateProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList">EksFargateProfileTagsList</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `fargate_profile_name_input`<sup>Optional</sup> <a name="fargate_profile_name_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fargateProfileNameInput"></a>

```python
fargate_profile_name_input: str
```

- *Type:* str

---

##### `pod_execution_role_arn_input`<sup>Optional</sup> <a name="pod_execution_role_arn_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.podExecutionRoleArnInput"></a>

```python
pod_execution_role_arn_input: str
```

- *Type:* str

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.selectorsInput"></a>

```python
selectors_input: IResolvable | typing.List[EksFargateProfileSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EksFargateProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `fargate_profile_name`<sup>Required</sup> <a name="fargate_profile_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.fargateProfileName"></a>

```python
fargate_profile_name: str
```

- *Type:* str

---

##### `pod_execution_role_arn`<sup>Required</sup> <a name="pod_execution_role_arn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.podExecutionRoleArn"></a>

```python
pod_execution_role_arn: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksFargateProfileConfig <a name="EksFargateProfileConfig" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_name: str,
  pod_execution_role_arn: str,
  selectors: IResolvable | typing.List[EksFargateProfileSelectors],
  fargate_profile_name: str = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[EksFargateProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Name of the Cluster. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.podExecutionRoleArn">pod_execution_role_arn</a></code> | <code>str</code> | The IAM policy arn for pods. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#selectors EksFargateProfile#selectors}. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.fargateProfileName">fargate_profile_name</a></code> | <code>str</code> | Name of FargateProfile. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#subnets EksFargateProfile#subnets}. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Name of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#cluster_name EksFargateProfile#cluster_name}

---

##### `pod_execution_role_arn`<sup>Required</sup> <a name="pod_execution_role_arn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.podExecutionRoleArn"></a>

```python
pod_execution_role_arn: str
```

- *Type:* str

The IAM policy arn for pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.selectors"></a>

```python
selectors: IResolvable | typing.List[EksFargateProfileSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#selectors EksFargateProfile#selectors}.

---

##### `fargate_profile_name`<sup>Optional</sup> <a name="fargate_profile_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.fargateProfileName"></a>

```python
fargate_profile_name: str
```

- *Type:* str

Name of FargateProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#fargate_profile_name EksFargateProfile#fargate_profile_name}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#subnets EksFargateProfile#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EksFargateProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#tags EksFargateProfile#tags}

---

### EksFargateProfileSelectors <a name="EksFargateProfileSelectors" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectors(
  namespace: str,
  labels: IResolvable | typing.List[EksFargateProfileSelectorsLabels] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#namespace EksFargateProfile#namespace}. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors.property.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#labels EksFargateProfile#labels}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#namespace EksFargateProfile#namespace}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors.property.labels"></a>

```python
labels: IResolvable | typing.List[EksFargateProfileSelectorsLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#labels EksFargateProfile#labels}.

---

### EksFargateProfileSelectorsLabels <a name="EksFargateProfileSelectorsLabels" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectorsLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels.property.key">key</a></code> | <code>str</code> | The key name of the label. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels.property.value">value</a></code> | <code>str</code> | The value for the label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#key EksFargateProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#value EksFargateProfile#value}

---

### EksFargateProfileTags <a name="EksFargateProfileTags" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#key EksFargateProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_fargate_profile#value EksFargateProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksFargateProfileSelectorsLabelsList <a name="EksFargateProfileSelectorsLabelsList" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectorsLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksFargateProfileSelectorsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksFargateProfileSelectorsLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]

---


### EksFargateProfileSelectorsLabelsOutputReference <a name="EksFargateProfileSelectorsLabelsOutputReference" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksFargateProfileSelectorsLabels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>

---


### EksFargateProfileSelectorsList <a name="EksFargateProfileSelectorsList" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksFargateProfileSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksFargateProfileSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>]

---


### EksFargateProfileSelectorsOutputReference <a name="EksFargateProfileSelectorsOutputReference" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.putLabels"></a>

```python
def put_labels(
  value: IResolvable | typing.List[EksFargateProfileSelectorsLabels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]

---

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList">EksFargateProfileSelectorsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.labelsInput">labels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.labels"></a>

```python
labels: EksFargateProfileSelectorsLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabelsList">EksFargateProfileSelectorsLabelsList</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.labelsInput"></a>

```python
labels_input: IResolvable | typing.List[EksFargateProfileSelectorsLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsLabels">EksFargateProfileSelectorsLabels</a>]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksFargateProfileSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileSelectors">EksFargateProfileSelectors</a>

---


### EksFargateProfileTagsList <a name="EksFargateProfileTagsList" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksFargateProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksFargateProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>]

---


### EksFargateProfileTagsOutputReference <a name="EksFargateProfileTagsOutputReference" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_fargate_profile

eksFargateProfile.EksFargateProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksFargateProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksFargateProfile.EksFargateProfileTags">EksFargateProfileTags</a>

---



