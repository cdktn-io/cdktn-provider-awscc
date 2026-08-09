# `eksCapability` Submodule <a name="`eksCapability` Submodule" id="@cdktn/provider-awscc.eksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCapability <a name="EksCapability" id="@cdktn/provider-awscc.eksCapability.EksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability awscc_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapability(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_name: str,
  cluster_name: str,
  delete_propagation_policy: str,
  role_arn: str,
  type: str,
  configuration: EksCapabilityConfiguration = None,
  tags: IResolvable | typing.List[EksCapabilityTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.capabilityName">capability_name</a></code> | <code>str</code> | A unique name for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the EKS cluster where you want to create the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of capability to create. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | The configuration settings for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.capabilityName"></a>

- *Type:* str

A unique name for the capability.

The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the EKS cluster where you want to create the capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy"></a>

- *Type:* str

Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted.

Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services.

This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.type"></a>

- *Type:* str

The type of capability to create.

Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#type EksCapability#type}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

The configuration settings for the capability.

The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#tags EksCapability#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapability.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eksCapability.EksCapability.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksCapability.EksCapability.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eksCapability.EksCapability.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eksCapability.EksCapability.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eksCapability.EksCapability.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eksCapability.EksCapability.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration"></a>

```python
def put_configuration(
  argo_cd: EksCapabilityConfigurationArgoCd = None
) -> None
```

###### `argo_cd`<sup>Optional</sup> <a name="argo_cd" id="@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration.parameter.argoCd"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

Configuration settings for an Argo CD capability.

This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eksCapability.EksCapability.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EksCapabilityTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapability.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EksCapability resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapability.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapability.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapability.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapability.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EksCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksCapability to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference">EksCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList">EksCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityNameInput">capability_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicyInput">delete_propagation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityName">capability_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.configuration"></a>

```python
configuration: EksCapabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference">EksCapabilityConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tags"></a>

```python
tags: EksCapabilityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList">EksCapabilityTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `capability_name_input`<sup>Optional</sup> <a name="capability_name_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityNameInput"></a>

```python
capability_name_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.configurationInput"></a>

```python
configuration_input: IResolvable | EksCapabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---

##### `delete_propagation_policy_input`<sup>Optional</sup> <a name="delete_propagation_policy_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicyInput"></a>

```python
delete_propagation_policy_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EksCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityName"></a>

```python
capability_name: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicy"></a>

```python
delete_propagation_policy: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksCapabilityConfig <a name="EksCapabilityConfig" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_name: str,
  cluster_name: str,
  delete_propagation_policy: str,
  role_arn: str,
  type: str,
  configuration: EksCapabilityConfiguration = None,
  tags: IResolvable | typing.List[EksCapabilityTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.capabilityName">capability_name</a></code> | <code>str</code> | A unique name for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the EKS cluster where you want to create the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.type">type</a></code> | <code>str</code> | The type of capability to create. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | The configuration settings for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.capabilityName"></a>

```python
capability_name: str
```

- *Type:* str

A unique name for the capability.

The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the EKS cluster where you want to create the capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy"></a>

```python
delete_propagation_policy: str
```

- *Type:* str

Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted.

Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services.

This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of capability to create.

Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#type EksCapability#type}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.configuration"></a>

```python
configuration: EksCapabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

The configuration settings for the capability.

The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EksCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#tags EksCapability#tags}

---

### EksCapabilityConfiguration <a name="EksCapabilityConfiguration" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfiguration(
  argo_cd: EksCapabilityConfigurationArgoCd = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.argoCd">argo_cd</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | Configuration settings for an Argo CD capability. |

---

##### `argo_cd`<sup>Optional</sup> <a name="argo_cd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.argoCd"></a>

```python
argo_cd: EksCapabilityConfigurationArgoCd
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

Configuration settings for an Argo CD capability.

This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

### EksCapabilityConfigurationArgoCd <a name="EksCapabilityConfigurationArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCd(
  aws_idc: EksCapabilityConfigurationArgoCdAwsIdc = None,
  namespace: str = None,
  network_access: EksCapabilityConfigurationArgoCdNetworkAccess = None,
  rbac_role_mappings: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc">aws_idc</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | Configuration for integrating Argo CD with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace">namespace</a></code> | <code>str</code> | The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess">network_access</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | Configuration for network access to the Argo CD capability's managed API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMappings">rbac_role_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]</code> | A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. |

---

##### `aws_idc`<sup>Optional</sup> <a name="aws_idc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc"></a>

```python
aws_idc: EksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

Configuration for integrating Argo CD with IAM Identity Center.

This allows you to use your organization's identity provider for authentication to Argo CD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#namespace EksCapability#namespace}

---

##### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess"></a>

```python
network_access: EksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

Configuration for network access to the Argo CD capability's managed API server endpoint.

By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

##### `rbac_role_mappings`<sup>Optional</sup> <a name="rbac_role_mappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMappings"></a>

```python
rbac_role_mappings: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]

A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles.

Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#rbac_role_mappings EksCapability#rbac_role_mappings}

---

### EksCapabilityConfigurationArgoCdAwsIdc <a name="EksCapabilityConfigurationArgoCdAwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdAwsIdc(
  idc_instance_arn: str = None,
  idc_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | The ARN of the IAM Identity Center instance to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion">idc_region</a></code> | <code>str</code> | The Region where your IAM Identity Center instance is located. |

---

##### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

The ARN of the IAM Identity Center instance to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}

---

##### `idc_region`<sup>Optional</sup> <a name="idc_region" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion"></a>

```python
idc_region: str
```

- *Type:* str

The Region where your IAM Identity Center instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}

---

### EksCapabilityConfigurationArgoCdNetworkAccess <a name="EksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess(
  vpce_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. |

---

##### `vpce_ids`<sup>Optional</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint.

Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappings <a name="EksCapabilityConfigurationArgoCdRbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings(
  identities: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities] = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.identities">identities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]</code> | A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.role">role</a></code> | <code>str</code> | The Argo CD role to assign. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.identities"></a>

```python
identities: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]

A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#identities EksCapability#identities}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.role"></a>

```python
role: str
```

- *Type:* str

The Argo CD role to assign.

Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#role EksCapability#role}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities(
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.id">id</a></code> | <code>str</code> | The unique identifier of the IAM Identity Center user or group. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.type">type</a></code> | <code>str</code> | The type of identity. Valid values are SSO_USER or SSO_GROUP. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the IAM Identity Center user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#id EksCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.type"></a>

```python
type: str
```

- *Type:* str

The type of identity. Valid values are SSO_USER or SSO_GROUP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#type EksCapability#type}

---

### EksCapabilityTags <a name="EksCapabilityTags" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#key EksCapability#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#value EksCapability#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="EksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcInstanceArn">reset_idc_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion">reset_idc_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idc_instance_arn` <a name="reset_idc_instance_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcInstanceArn"></a>

```python
def reset_idc_instance_arn() -> None
```

##### `reset_idc_region` <a name="reset_idc_region" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion"></a>

```python
def reset_idc_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">idc_managed_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput">idc_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput">idc_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">idc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idc_managed_application_arn`<sup>Required</sup> <a name="idc_managed_application_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```python
idc_managed_application_arn: str
```

- *Type:* str

---

##### `idc_instance_arn_input`<sup>Optional</sup> <a name="idc_instance_arn_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput"></a>

```python
idc_instance_arn_input: str
```

- *Type:* str

---

##### `idc_region_input`<sup>Optional</sup> <a name="idc_region_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput"></a>

```python
idc_region_input: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `idc_region`<sup>Required</sup> <a name="idc_region" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```python
idc_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---


### EksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="EksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds">reset_vpce_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpce_ids` <a name="reset_vpce_ids" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds"></a>

```python
def reset_vpce_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput">vpce_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpce_ids_input`<sup>Optional</sup> <a name="vpce_ids_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput"></a>

```python
vpce_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpce_ids`<sup>Required</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### EksCapabilityConfigurationArgoCdOutputReference <a name="EksCapabilityConfigurationArgoCdOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc">put_aws_idc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess">put_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings">put_rbac_role_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc">reset_aws_idc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess">reset_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMappings">reset_rbac_role_mappings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_idc` <a name="put_aws_idc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc"></a>

```python
def put_aws_idc(
  idc_instance_arn: str = None,
  idc_region: str = None
) -> None
```

###### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.idcInstanceArn"></a>

- *Type:* str

The ARN of the IAM Identity Center instance to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}

---

###### `idc_region`<sup>Optional</sup> <a name="idc_region" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.idcRegion"></a>

- *Type:* str

The Region where your IAM Identity Center instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}

---

##### `put_network_access` <a name="put_network_access" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess"></a>

```python
def put_network_access(
  vpce_ids: typing.List[str] = None
) -> None
```

###### `vpce_ids`<sup>Optional</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess.parameter.vpceIds"></a>

- *Type:* typing.List[str]

A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint.

Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}

---

##### `put_rbac_role_mappings` <a name="put_rbac_role_mappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings"></a>

```python
def put_rbac_role_mappings(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]

---

##### `reset_aws_idc` <a name="reset_aws_idc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc"></a>

```python
def reset_aws_idc() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_network_access` <a name="reset_network_access" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess"></a>

```python
def reset_network_access() -> None
```

##### `reset_rbac_role_mappings` <a name="reset_rbac_role_mappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMappings"></a>

```python
def reset_rbac_role_mappings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">aws_idc</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference">EksCapabilityConfigurationArgoCdAwsIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">network_access</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference">EksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings">rbac_role_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList">EksCapabilityConfigurationArgoCdRbacRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput">aws_idc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput">network_access_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingsInput">rbac_role_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_idc`<sup>Required</sup> <a name="aws_idc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```python
aws_idc: EksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference">EksCapabilityConfigurationArgoCdAwsIdcOutputReference</a>

---

##### `network_access`<sup>Required</sup> <a name="network_access" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```python
network_access: EksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference">EksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a>

---

##### `rbac_role_mappings`<sup>Required</sup> <a name="rbac_role_mappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings"></a>

```python
rbac_role_mappings: EksCapabilityConfigurationArgoCdRbacRoleMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList">EksCapabilityConfigurationArgoCdRbacRoleMappingsList</a>

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `aws_idc_input`<sup>Optional</sup> <a name="aws_idc_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput"></a>

```python
aws_idc_input: IResolvable | EksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `network_access_input`<sup>Optional</sup> <a name="network_access_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput"></a>

```python
network_access_input: IResolvable | EksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---

##### `rbac_role_mappings_input`<sup>Optional</sup> <a name="rbac_role_mappings_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingsInput"></a>

```python
rbac_role_mappings_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCd
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities">put_identities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identities` <a name="put_identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities"></a>

```python
def put_identities(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]

---

##### `reset_identities` <a name="reset_identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities">identities</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identitiesInput">identities_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities"></a>

```python
identities: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a>

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identitiesInput"></a>

```python
identities_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdRbacRoleMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>

---


### EksCapabilityConfigurationOutputReference <a name="EksCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd">put_argo_cd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd">reset_argo_cd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_argo_cd` <a name="put_argo_cd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd"></a>

```python
def put_argo_cd(
  aws_idc: EksCapabilityConfigurationArgoCdAwsIdc = None,
  namespace: str = None,
  network_access: EksCapabilityConfigurationArgoCdNetworkAccess = None,
  rbac_role_mappings: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappings] = None
) -> None
```

###### `aws_idc`<sup>Optional</sup> <a name="aws_idc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.awsIdc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

Configuration for integrating Argo CD with IAM Identity Center.

This allows you to use your organization's identity provider for authentication to Argo CD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.namespace"></a>

- *Type:* str

The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#namespace EksCapability#namespace}

---

###### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.networkAccess"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

Configuration for network access to the Argo CD capability's managed API server endpoint.

By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

###### `rbac_role_mappings`<sup>Optional</sup> <a name="rbac_role_mappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.rbacRoleMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings">EksCapabilityConfigurationArgoCdRbacRoleMappings</a>]

A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles.

Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/eks_capability#rbac_role_mappings EksCapability#rbac_role_mappings}

---

##### `reset_argo_cd` <a name="reset_argo_cd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd"></a>

```python
def reset_argo_cd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd">argo_cd</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference">EksCapabilityConfigurationArgoCdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput">argo_cd_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `argo_cd`<sup>Required</sup> <a name="argo_cd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd"></a>

```python
argo_cd: EksCapabilityConfigurationArgoCdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference">EksCapabilityConfigurationArgoCdOutputReference</a>

---

##### `argo_cd_input`<sup>Optional</sup> <a name="argo_cd_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput"></a>

```python
argo_cd_input: IResolvable | EksCapabilityConfigurationArgoCd
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---


### EksCapabilityTagsList <a name="EksCapabilityTagsList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>]

---


### EksCapabilityTagsOutputReference <a name="EksCapabilityTagsOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_capability

eksCapability.EksCapabilityTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags">EksCapabilityTags</a>

---



