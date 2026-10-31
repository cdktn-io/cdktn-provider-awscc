# `bedrockRetrievalInstruction` Submodule <a name="`bedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.bedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockRetrievalInstruction <a name="BedrockRetrievalInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstruction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instruction: BedrockRetrievalInstructionInstruction,
  name: str,
  customer_encryption_key_arn: str = None,
  description: str = None,
  tags: IResolvable | typing.List[BedrockRetrievalInstructionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | The reviewed content this instruction serves ? |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the retrieval instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | The ARN of the customer managed KMS key protecting this content, when one was supplied at create. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the retrieval instruction. On a numbered version, the description of that version. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.instruction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

The reviewed content this instruction serves ?

what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#instruction BedrockRetrievalInstruction#instruction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.name"></a>

- *Type:* str

The name of the retrieval instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#name BedrockRetrievalInstruction#name}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* str

The ARN of the customer managed KMS key protecting this content, when one was supplied at create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn BedrockRetrievalInstruction#customer_encryption_key_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.description"></a>

- *Type:* str

A description of the retrieval instruction. On a numbered version, the description of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#description BedrockRetrievalInstruction#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#tags BedrockRetrievalInstruction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction">put_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn">reset_customer_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instruction` <a name="put_instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction"></a>

```python
def put_instruction(
  answer_format: str = None,
  answer_policy: str = None,
  persona: str = None,
  retrieval_guidance: str = None
) -> None
```

###### `answer_format`<sup>Optional</sup> <a name="answer_format" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.answerFormat"></a>

- *Type:* str

How the answer is structured, including how sources are cited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_format BedrockRetrievalInstruction#answer_format}

---

###### `answer_policy`<sup>Optional</sup> <a name="answer_policy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.answerPolicy"></a>

- *Type:* str

Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_policy BedrockRetrievalInstruction#answer_policy}

---

###### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.persona"></a>

- *Type:* str

Who the assistant is: identity, tone and language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#persona BedrockRetrievalInstruction#persona}

---

###### `retrieval_guidance`<sup>Optional</sup> <a name="retrieval_guidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.retrievalGuidance"></a>

- *Type:* str

How to interpret and decompose the question, and what to prioritise when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#retrieval_guidance BedrockRetrievalInstruction#retrieval_guidance}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockRetrievalInstructionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]

---

##### `reset_customer_encryption_key_arn` <a name="reset_customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn"></a>

```python
def reset_customer_encryption_key_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstruction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstruction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstruction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstruction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockRetrievalInstruction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus">last_transition_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId">retrieval_instruction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput">customer_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput">instruction_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction"></a>

```python
instruction: BedrockRetrievalInstructionInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `last_transition_status`<sup>Required</sup> <a name="last_transition_status" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```python
last_transition_status: str
```

- *Type:* str

---

##### `retrieval_instruction_id`<sup>Required</sup> <a name="retrieval_instruction_id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```python
retrieval_instruction_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags"></a>

```python
tags: BedrockRetrievalInstructionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `customer_encryption_key_arn_input`<sup>Optional</sup> <a name="customer_encryption_key_arn_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput"></a>

```python
customer_encryption_key_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput"></a>

```python
instruction_input: IResolvable | BedrockRetrievalInstructionInstruction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockRetrievalInstructionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockRetrievalInstructionConfig <a name="BedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instruction: BedrockRetrievalInstructionInstruction,
  name: str,
  customer_encryption_key_arn: str = None,
  description: str = None,
  tags: IResolvable | typing.List[BedrockRetrievalInstructionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | The reviewed content this instruction serves ? |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name">name</a></code> | <code>str</code> | The name of the retrieval instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | The ARN of the customer managed KMS key protecting this content, when one was supplied at create. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description">description</a></code> | <code>str</code> | A description of the retrieval instruction. On a numbered version, the description of that version. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction"></a>

```python
instruction: BedrockRetrievalInstructionInstruction
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

The reviewed content this instruction serves ?

what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#instruction BedrockRetrievalInstruction#instruction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the retrieval instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#name BedrockRetrievalInstruction#name}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

The ARN of the customer managed KMS key protecting this content, when one was supplied at create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn BedrockRetrievalInstruction#customer_encryption_key_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the retrieval instruction. On a numbered version, the description of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#description BedrockRetrievalInstruction#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockRetrievalInstructionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#tags BedrockRetrievalInstruction#tags}

---

### BedrockRetrievalInstructionInstruction <a name="BedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction(
  answer_format: str = None,
  answer_policy: str = None,
  persona: str = None,
  retrieval_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat">answer_format</a></code> | <code>str</code> | How the answer is structured, including how sources are cited. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy">answer_policy</a></code> | <code>str</code> | Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona">persona</a></code> | <code>str</code> | Who the assistant is: identity, tone and language. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance">retrieval_guidance</a></code> | <code>str</code> | How to interpret and decompose the question, and what to prioritise when searching. |

---

##### `answer_format`<sup>Optional</sup> <a name="answer_format" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat"></a>

```python
answer_format: str
```

- *Type:* str

How the answer is structured, including how sources are cited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_format BedrockRetrievalInstruction#answer_format}

---

##### `answer_policy`<sup>Optional</sup> <a name="answer_policy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy"></a>

```python
answer_policy: str
```

- *Type:* str

Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_policy BedrockRetrievalInstruction#answer_policy}

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona"></a>

```python
persona: str
```

- *Type:* str

Who the assistant is: identity, tone and language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#persona BedrockRetrievalInstruction#persona}

---

##### `retrieval_guidance`<sup>Optional</sup> <a name="retrieval_guidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance"></a>

```python
retrieval_guidance: str
```

- *Type:* str

How to interpret and decompose the question, and what to prioritise when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#retrieval_guidance BedrockRetrievalInstruction#retrieval_guidance}

---

### BedrockRetrievalInstructionTags <a name="BedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#key BedrockRetrievalInstruction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#value BedrockRetrievalInstruction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockRetrievalInstructionInstructionOutputReference <a name="BedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat">reset_answer_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy">reset_answer_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona">reset_persona</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance">reset_retrieval_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_answer_format` <a name="reset_answer_format" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat"></a>

```python
def reset_answer_format() -> None
```

##### `reset_answer_policy` <a name="reset_answer_policy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy"></a>

```python
def reset_answer_policy() -> None
```

##### `reset_persona` <a name="reset_persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona"></a>

```python
def reset_persona() -> None
```

##### `reset_retrieval_guidance` <a name="reset_retrieval_guidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance"></a>

```python
def reset_retrieval_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput">answer_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput">answer_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput">persona_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput">retrieval_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">answer_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">answer_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">retrieval_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `answer_format_input`<sup>Optional</sup> <a name="answer_format_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput"></a>

```python
answer_format_input: str
```

- *Type:* str

---

##### `answer_policy_input`<sup>Optional</sup> <a name="answer_policy_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput"></a>

```python
answer_policy_input: str
```

- *Type:* str

---

##### `persona_input`<sup>Optional</sup> <a name="persona_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput"></a>

```python
persona_input: str
```

- *Type:* str

---

##### `retrieval_guidance_input`<sup>Optional</sup> <a name="retrieval_guidance_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput"></a>

```python
retrieval_guidance_input: str
```

- *Type:* str

---

##### `answer_format`<sup>Required</sup> <a name="answer_format" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```python
answer_format: str
```

- *Type:* str

---

##### `answer_policy`<sup>Required</sup> <a name="answer_policy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```python
answer_policy: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `retrieval_guidance`<sup>Required</sup> <a name="retrieval_guidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```python
retrieval_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockRetrievalInstructionInstruction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---


### BedrockRetrievalInstructionTagsList <a name="BedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockRetrievalInstructionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockRetrievalInstructionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>]

---


### BedrockRetrievalInstructionTagsOutputReference <a name="BedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_retrieval_instruction

bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockRetrievalInstructionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>

---



