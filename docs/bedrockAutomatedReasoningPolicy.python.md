# `bedrockAutomatedReasoningPolicy` Submodule <a name="`bedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicy <a name="BedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  force_delete: bool | IResolvable = None,
  kms_key_id: str = None,
  policy_definition: BedrockAutomatedReasoningPolicyPolicyDefinition = None,
  tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.policyDefinition">policy_definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forceDelete"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `policy_definition`<sup>Optional</sup> <a name="policy_definition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.policyDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition">put_policy_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition">reset_policy_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy_definition` <a name="put_policy_definition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition"></a>

```python
def put_policy_definition(
  rules: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules] = None,
  types: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes] = None,
  variables: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables] = None,
  version: str = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]

The rules definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}

---

###### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.types"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]

The types definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}

---

###### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.variables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]

The variables definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.version"></a>

- *Type:* str

The policy format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_policy_definition` <a name="reset_policy_definition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition"></a>

```python
def reset_policy_definition() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockAutomatedReasoningPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash">definition_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition">policy_definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput">force_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput">policy_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `definition_hash`<sup>Required</sup> <a name="definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```python
definition_hash: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `policy_definition`<sup>Required</sup> <a name="policy_definition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```python
policy_definition: BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags"></a>

```python
tags: BedrockAutomatedReasoningPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput"></a>

```python
force_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_definition_input`<sup>Optional</sup> <a name="policy_definition_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput"></a>

```python
policy_definition_input: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyConfig <a name="BedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  force_delete: bool | IResolvable = None,
  kms_key_id: str = None,
  policy_definition: BedrockAutomatedReasoningPolicyPolicyDefinition = None,
  tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition">policy_definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `policy_definition`<sup>Optional</sup> <a name="policy_definition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition"></a>

```python
policy_definition: BedrockAutomatedReasoningPolicyPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

### BedrockAutomatedReasoningPolicyPolicyDefinition <a name="BedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition(
  rules: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules] = None,
  types: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes] = None,
  variables: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]</code> | The rules definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types">types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]</code> | The types definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables">variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]</code> | The variables definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version">version</a></code> | <code>str</code> | The policy format version. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules"></a>

```python
rules: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]

The rules definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types"></a>

```python
types: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]

The types definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables"></a>

```python
variables: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]

The variables definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version"></a>

```python
version: str
```

- *Type:* str

The policy format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules(
  alternate_expression: str = None,
  expression: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression">alternate_expression</a></code> | <code>str</code> | An alternate expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression">expression</a></code> | <code>str</code> | The SMT expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id">id</a></code> | <code>str</code> | A unique id within the PolicyDefinition. |

---

##### `alternate_expression`<sup>Optional</sup> <a name="alternate_expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression"></a>

```python
alternate_expression: str
```

- *Type:* str

An alternate expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#alternate_expression BedrockAutomatedReasoningPolicy#alternate_expression}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

The SMT expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#expression BedrockAutomatedReasoningPolicy#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id"></a>

```python
id: str
```

- *Type:* str

A unique id within the PolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#id BedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes(
  description: str = None,
  name: str = None,
  values: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description">description</a></code> | <code>str</code> | A natural language description of this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name">name</a></code> | <code>str</code> | A name for this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values">values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]</code> | A list of valid values for this type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description"></a>

```python
description: str
```

- *Type:* str

A natural language description of this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name"></a>

```python
name: str
```

- *Type:* str

A name for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values"></a>

```python
values: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]

A list of valid values for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#values BedrockAutomatedReasoningPolicy#values}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues(
  description: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description">description</a></code> | <code>str</code> | A natural language description of the type's value. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value">value</a></code> | <code>str</code> | The value of the type value. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description"></a>

```python
description: str
```

- *Type:* str

A natural language description of the type's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the type value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables(
  description: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description">description</a></code> | <code>str</code> | A natural language description of this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name">name</a></code> | <code>str</code> | A name from this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type">type</a></code> | <code>str</code> | A type for this variable. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description"></a>

```python
description: str
```

- *Type:* str

A natural language description of this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name"></a>

```python
name: str
```

- *Type:* str

A name from this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type"></a>

```python
type: str
```

- *Type:* str

A type for this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#type BedrockAutomatedReasoningPolicy#type}

---

### BedrockAutomatedReasoningPolicyTags <a name="BedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key">key</a></code> | <code>str</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value">value</a></code> | <code>str</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#key BedrockAutomatedReasoningPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes">put_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables">put_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables">reset_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]

---

##### `put_types` <a name="put_types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes"></a>

```python
def put_types(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]

---

##### `put_variables` <a name="put_variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables"></a>

```python
def put_variables(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]

---

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">types</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput">types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput">variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```python
rules: BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```python
types: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```python
variables: BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput"></a>

```python
types_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput"></a>

```python
variables_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression">reset_alternate_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alternate_expression` <a name="reset_alternate_expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression"></a>

```python
def reset_alternate_expression() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput">alternate_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">alternate_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternate_expression_input`<sup>Optional</sup> <a name="alternate_expression_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput"></a>

```python
alternate_expression_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `alternate_expression`<sup>Required</sup> <a name="alternate_expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```python
alternate_expression: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinitionRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values` <a name="put_values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues"></a>

```python
def put_values(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput">values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```python
values: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput"></a>

```python
values_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinitionTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyPolicyDefinitionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyPolicyDefinitionVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### BedrockAutomatedReasoningPolicyTagsList <a name="BedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>]

---


### BedrockAutomatedReasoningPolicyTagsOutputReference <a name="BedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy

bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>

---



