# `eksPodIdentityAssociation` Submodule <a name="`eksPodIdentityAssociation` Submodule" id="@cdktn/provider-awscc.eksPodIdentityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksPodIdentityAssociation <a name="EksPodIdentityAssociation" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association awscc_eks_pod_identity_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociation(
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
  namespace: str,
  role_arn: str,
  service_account: str,
  disable_session_tags: bool | IResolvable = None,
  policy: str = None,
  tags: IResolvable | typing.List[EksPodIdentityAssociationTags] = None,
  target_role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The cluster that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The Kubernetes namespace that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The IAM role ARN that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The Kubernetes service account that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.disableSessionTags">disable_session_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | The Disable Session Tags of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.policy">policy</a></code> | <code>str</code> | The policy of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.targetRoleArn">target_role_arn</a></code> | <code>str</code> | The Target Role Arn of the pod identity association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.clusterName"></a>

- *Type:* str

The cluster that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.namespace"></a>

- *Type:* str

The Kubernetes namespace that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.roleArn"></a>

- *Type:* str

The IAM role ARN that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The Kubernetes service account that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}

---

##### `disable_session_tags`<sup>Optional</sup> <a name="disable_session_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.disableSessionTags"></a>

- *Type:* bool | cdktn.IResolvable

The Disable Session Tags of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.policy"></a>

- *Type:* str

The policy of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#policy EksPodIdentityAssociation#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}

---

##### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.targetRoleArn"></a>

- *Type:* str

The Target Role Arn of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags">reset_disable_session_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn">reset_target_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EksPodIdentityAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]

---

##### `reset_disable_session_tags` <a name="reset_disable_session_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags"></a>

```python
def reset_disable_session_tags() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_role_arn` <a name="reset_target_role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn"></a>

```python
def reset_target_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EksPodIdentityAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EksPodIdentityAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksPodIdentityAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksPodIdentityAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EksPodIdentityAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn">association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList">EksPodIdentityAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput">disable_session_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput">target_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags">disable_session_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_arn`<sup>Required</sup> <a name="association_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn"></a>

```python
association_arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags"></a>

```python
tags: EksPodIdentityAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList">EksPodIdentityAssociationTagsList</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `disable_session_tags_input`<sup>Optional</sup> <a name="disable_session_tags_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput"></a>

```python
disable_session_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EksPodIdentityAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]

---

##### `target_role_arn_input`<sup>Optional</sup> <a name="target_role_arn_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput"></a>

```python
target_role_arn_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `disable_session_tags`<sup>Required</sup> <a name="disable_session_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags"></a>

```python
disable_session_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `target_role_arn`<sup>Required</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksPodIdentityAssociationConfig <a name="EksPodIdentityAssociationConfig" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_name: str,
  namespace: str,
  role_arn: str,
  service_account: str,
  disable_session_tags: bool | IResolvable = None,
  policy: str = None,
  tags: IResolvable | typing.List[EksPodIdentityAssociationTags] = None,
  target_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The cluster that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace">namespace</a></code> | <code>str</code> | The Kubernetes namespace that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM role ARN that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The Kubernetes service account that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags">disable_session_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | The Disable Session Tags of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.policy">policy</a></code> | <code>str</code> | The policy of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | The Target Role Arn of the pod identity association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The cluster that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The Kubernetes namespace that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM role ARN that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The Kubernetes service account that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}

---

##### `disable_session_tags`<sup>Optional</sup> <a name="disable_session_tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags"></a>

```python
disable_session_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The Disable Session Tags of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

The policy of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#policy EksPodIdentityAssociation#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EksPodIdentityAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}

---

##### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

The Target Role Arn of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}

---

### EksPodIdentityAssociationTags <a name="EksPodIdentityAssociationTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#key EksPodIdentityAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_pod_identity_association#value EksPodIdentityAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksPodIdentityAssociationTagsList <a name="EksPodIdentityAssociationTagsList" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksPodIdentityAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksPodIdentityAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>]

---


### EksPodIdentityAssociationTagsOutputReference <a name="EksPodIdentityAssociationTagsOutputReference" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_pod_identity_association

eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksPodIdentityAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags">EksPodIdentityAssociationTags</a>

---



