# `bedrockPrompt` Submodule <a name="`bedrockPrompt` Submodule" id="@cdktn/provider-awscc.bedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockPrompt <a name="BedrockPrompt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPrompt(
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
  customer_encryption_key_arn: str = None,
  default_variant: str = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  variants: IResolvable | typing.List[BedrockPromptVariants] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.defaultVariant">default_variant</a></code> | <code>str</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.description">description</a></code> | <code>str</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.variants">variants</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]</code> | List of prompt variants. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.name"></a>

- *Type:* str

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* str

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `default_variant`<sup>Optional</sup> <a name="default_variant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.defaultVariant"></a>

- *Type:* str

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.description"></a>

- *Type:* str

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `variants`<sup>Optional</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.variants"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants">put_variants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn">reset_customer_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant">reset_default_variant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants">reset_variants</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_variants` <a name="put_variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants"></a>

```python
def put_variants(
  value: IResolvable | typing.List[BedrockPromptVariants]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]

---

##### `reset_customer_encryption_key_arn` <a name="reset_customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn"></a>

```python
def reset_customer_encryption_key_arn() -> None
```

##### `reset_default_variant` <a name="reset_default_variant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant"></a>

```python
def reset_default_variant() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_variants` <a name="reset_variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants"></a>

```python
def reset_variants() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPrompt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPrompt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPrompt.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPrompt.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockPrompt to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId">prompt_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput">customer_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput">default_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput">variants_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant">default_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prompt_id`<sup>Required</sup> <a name="prompt_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId"></a>

```python
prompt_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants"></a>

```python
variants: BedrockPromptVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `customer_encryption_key_arn_input`<sup>Optional</sup> <a name="customer_encryption_key_arn_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput"></a>

```python
customer_encryption_key_arn_input: str
```

- *Type:* str

---

##### `default_variant_input`<sup>Optional</sup> <a name="default_variant_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput"></a>

```python
default_variant_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `variants_input`<sup>Optional</sup> <a name="variants_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput"></a>

```python
variants_input: IResolvable | typing.List[BedrockPromptVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `default_variant`<sup>Required</sup> <a name="default_variant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant"></a>

```python
default_variant: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockPromptConfig <a name="BedrockPromptConfig" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  customer_encryption_key_arn: str = None,
  default_variant: str = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  variants: IResolvable | typing.List[BedrockPromptVariants] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name">name</a></code> | <code>str</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant">default_variant</a></code> | <code>str</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description">description</a></code> | <code>str</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants">variants</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]</code> | List of prompt variants. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `default_variant`<sup>Optional</sup> <a name="default_variant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant"></a>

```python
default_variant: str
```

- *Type:* str

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `variants`<sup>Optional</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants"></a>

```python
variants: IResolvable | typing.List[BedrockPromptVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

### BedrockPromptVariants <a name="BedrockPromptVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariants(
  additional_model_request_fields: str = None,
  gen_ai_resource: BedrockPromptVariantsGenAiResource = None,
  inference_configuration: BedrockPromptVariantsInferenceConfiguration = None,
  metadata: IResolvable | typing.List[BedrockPromptVariantsMetadata] = None,
  model_id: str = None,
  name: str = None,
  template_configuration: BedrockPromptVariantsTemplateConfiguration = None,
  template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | Contains model-specific configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource">gen_ai_resource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | Target resource to invoke with Prompt. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | Model inference configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata">metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]</code> | List of metadata to associate with the prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId">model_id</a></code> | <code>str</code> | ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name">name</a></code> | <code>str</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | Prompt template configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType">template_type</a></code> | <code>str</code> | Prompt template type. |

---

##### `additional_model_request_fields`<sup>Optional</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

Contains model-specific configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#additional_model_request_fields BedrockPrompt#additional_model_request_fields}

---

##### `gen_ai_resource`<sup>Optional</sup> <a name="gen_ai_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource"></a>

```python
gen_ai_resource: BedrockPromptVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

Target resource to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#gen_ai_resource BedrockPrompt#gen_ai_resource}

---

##### `inference_configuration`<sup>Optional</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockPromptVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

Model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#inference_configuration BedrockPrompt#inference_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata"></a>

```python
metadata: IResolvable | typing.List[BedrockPromptVariantsMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]

List of metadata to associate with the prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#metadata BedrockPrompt#metadata}

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#model_id BedrockPrompt#model_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name"></a>

```python
name: str
```

- *Type:* str

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `template_configuration`<sup>Optional</sup> <a name="template_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration"></a>

```python
template_configuration: BedrockPromptVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

Prompt template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#template_configuration BedrockPrompt#template_configuration}

---

##### `template_type`<sup>Optional</sup> <a name="template_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

Prompt template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#template_type BedrockPrompt#template_type}

---

### BedrockPromptVariantsGenAiResource <a name="BedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsGenAiResource(
  agent: BedrockPromptVariantsGenAiResourceAgent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | Target Agent to invoke with Prompt. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent"></a>

```python
agent: BedrockPromptVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

Target Agent to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}

---

### BedrockPromptVariantsGenAiResourceAgent <a name="BedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent(
  agent_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier">agent_identifier</a></code> | <code>str</code> | Arn representation of the Agent Alias. |

---

##### `agent_identifier`<sup>Optional</sup> <a name="agent_identifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier"></a>

```python
agent_identifier: str
```

- *Type:* str

Arn representation of the Agent Alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}

---

### BedrockPromptVariantsInferenceConfiguration <a name="BedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsInferenceConfiguration(
  text: BedrockPromptVariantsInferenceConfigurationText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | Prompt model inference configuration. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text"></a>

```python
text: BedrockPromptVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

Prompt model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsInferenceConfigurationText <a name="BedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText(
  max_tokens: typing.Union[int, float] = None,
  stop_sequences: typing.List[str] = None,
  temperature: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | Cumulative probability cutoff for token selection. |

---

##### `max_tokens`<sup>Optional</sup> <a name="max_tokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}

---

##### `stop_sequences`<sup>Optional</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}

---

##### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}

---

### BedrockPromptVariantsMetadata <a name="BedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsMetadata(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key">key</a></code> | <code>str</code> | The key of a metadata tag for a prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value">value</a></code> | <code>str</code> | The value of a metadata tag for a prompt variant. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

The key of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

The value of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#value BedrockPrompt#value}

---

### BedrockPromptVariantsTemplateConfiguration <a name="BedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfiguration(
  chat: BedrockPromptVariantsTemplateConfigurationChat = None,
  text: BedrockPromptVariantsTemplateConfigurationText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | Configuration for text prompt template. |

---

##### `chat`<sup>Optional</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat"></a>

```python
chat: BedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text"></a>

```python
text: BedrockPromptVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

Configuration for text prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChat <a name="BedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat(
  input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables] = None,
  messages: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages] = None,
  system_attribute: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem] = None,
  tool_configuration: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables">input_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages">messages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]</code> | List of messages for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute">system_attribute</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]</code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration">tool_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | Tool configuration. |

---

##### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables"></a>

```python
input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages"></a>

```python
messages: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]

List of messages for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute"></a>

```python
system_attribute: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}

---

##### `tool_configuration`<sup>Optional</sup> <a name="tool_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration"></a>

```python
tool_configuration: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

Tool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}

---

### BedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name">name</a></code> | <code>str</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatMessages <a name="BedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages(
  content: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessagesContent] = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]</code> | List of Content Blocks. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role">role</a></code> | <code>str</code> | Conversation roles for the chat prompt. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content"></a>

```python
content: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessagesContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]

List of Content Blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#content BedrockPrompt#content}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role"></a>

```python
role: str
```

- *Type:* str

Conversation roles for the chat prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#role BedrockPrompt#role}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent(
  cache_point: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text">text</a></code> | <code>str</code> | Configuration for chat prompt template. |

---

##### `cache_point`<sup>Optional</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text"></a>

```python
text: str
```

- *Type:* str

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type">type</a></code> | <code>str</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type"></a>

```python
type: str
```

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatSystem <a name="BedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem(
  cache_point: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text">text</a></code> | <code>str</code> | Configuration for chat prompt template. |

---

##### `cache_point`<sup>Optional</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text"></a>

```python
text: str
```

- *Type:* str

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type">type</a></code> | <code>str</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type"></a>

```python
type: str
```

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration(
  tool_choice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice = None,
  tools: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice">tool_choice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools">tools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]</code> | List of Tools. |

---

##### `tool_choice`<sup>Optional</sup> <a name="tool_choice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice"></a>

```python
tool_choice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools"></a>

```python
tools: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]

List of Tools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice(
  any: str = None,
  auto: str = None,
  tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any">any</a></code> | <code>str</code> | Any Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto">auto</a></code> | <code>str</code> | Auto Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | Specific Tool choice. |

---

##### `any`<sup>Optional</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any"></a>

```python
any: str
```

- *Type:* str

Any Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto"></a>

```python
auto: str
```

- *Type:* str

Auto Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool"></a>

```python
tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

Specific Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name">name</a></code> | <code>str</code> | Tool name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name"></a>

```python
name: str
```

- *Type:* str

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools(
  cache_point: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint = None,
  tool_spec: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec">tool_spec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | Tool specification. |

---

##### `cache_point`<sup>Optional</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `tool_spec`<sup>Optional</sup> <a name="tool_spec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec"></a>

```python
tool_spec: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

Tool specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool_spec BedrockPrompt#tool_spec}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type">type</a></code> | <code>str</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type"></a>

```python
type: str
```

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec(
  description: str = None,
  input_schema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema">input_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | Tool input schema. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name">name</a></code> | <code>str</code> | Tool name. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}.

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema"></a>

```python
input_schema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

Tool input schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name"></a>

```python
name: str
```

- *Type:* str

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema(
  json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json">json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}. |

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json"></a>

```python
json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}.

---

### BedrockPromptVariantsTemplateConfigurationText <a name="BedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText(
  cache_point: BedrockPromptVariantsTemplateConfigurationTextCachePoint = None,
  input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables] = None,
  text: str = None,
  text_s3_location: BedrockPromptVariantsTemplateConfigurationTextTextS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables">input_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text">text</a></code> | <code>str</code> | Prompt content for String prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location">text_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | The identifier for the S3 resource. |

---

##### `cache_point`<sup>Optional</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables"></a>

```python
input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text"></a>

```python
text: str
```

- *Type:* str

Prompt content for String prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `text_s3_location`<sup>Optional</sup> <a name="text_s3_location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location"></a>

```python
text_s3_location: BedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}

---

### BedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="BedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type">type</a></code> | <code>str</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type"></a>

```python
type: str
```

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name">name</a></code> | <code>str</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location(
  bucket: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket">bucket</a></code> | <code>str</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key">key</a></code> | <code>str</code> | A object key in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version">version</a></code> | <code>str</code> | The version of the the S3 object to use. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the the S3 object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockPromptVariantsGenAiResourceAgentOutputReference <a name="BedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier">reset_agent_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_identifier` <a name="reset_agent_identifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier"></a>

```python
def reset_agent_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput">agent_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agent_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_identifier_input`<sup>Optional</sup> <a name="agent_identifier_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput"></a>

```python
agent_identifier_input: str
```

- *Type:* str

---

##### `agent_identifier`<sup>Required</sup> <a name="agent_identifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```python
agent_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsGenAiResourceAgent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---


### BedrockPromptVariantsGenAiResourceOutputReference <a name="BedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent">put_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent">reset_agent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent` <a name="put_agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent"></a>

```python
def put_agent(
  agent_identifier: str = None
) -> None
```

###### `agent_identifier`<sup>Optional</sup> <a name="agent_identifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent.parameter.agentIdentifier"></a>

- *Type:* str

Arn representation of the Agent Alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}

---

##### `reset_agent` <a name="reset_agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent"></a>

```python
def reset_agent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput">agent_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```python
agent: BedrockPromptVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput"></a>

```python
agent_input: IResolvable | BedrockPromptVariantsGenAiResourceAgent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsGenAiResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---


### BedrockPromptVariantsInferenceConfigurationOutputReference <a name="BedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_text` <a name="put_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText"></a>

```python
def put_text(
  max_tokens: typing.Union[int, float] = None,
  stop_sequences: typing.List[str] = None,
  temperature: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
) -> None
```

###### `max_tokens`<sup>Optional</sup> <a name="max_tokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.maxTokens"></a>

- *Type:* typing.Union[int, float]

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}

---

###### `stop_sequences`<sup>Optional</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.stopSequences"></a>

- *Type:* typing.List[str]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}

---

###### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.topP"></a>

- *Type:* typing.Union[int, float]

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}

---

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput">text_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```python
text: BedrockPromptVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput"></a>

```python
text_input: IResolvable | BedrockPromptVariantsInferenceConfigurationText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsInferenceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---


### BedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="BedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens">reset_max_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences">reset_stop_sequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP">reset_top_p</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_tokens` <a name="reset_max_tokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens"></a>

```python
def reset_max_tokens() -> None
```

##### `reset_stop_sequences` <a name="reset_stop_sequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences"></a>

```python
def reset_stop_sequences() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```

##### `reset_top_p` <a name="reset_top_p" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP"></a>

```python
def reset_top_p() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput">max_tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput">stop_sequences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput">top_p_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens_input`<sup>Optional</sup> <a name="max_tokens_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput"></a>

```python
max_tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences_input`<sup>Optional</sup> <a name="stop_sequences_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput"></a>

```python
stop_sequences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p_input`<sup>Optional</sup> <a name="top_p_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput"></a>

```python
top_p_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsInferenceConfigurationText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---


### BedrockPromptVariantsList <a name="BedrockPromptVariantsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>]

---


### BedrockPromptVariantsMetadataList <a name="BedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]

---


### BedrockPromptVariantsMetadataOutputReference <a name="BedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>

---


### BedrockPromptVariantsOutputReference <a name="BedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource">put_gen_ai_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration">put_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration">put_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields">reset_additional_model_request_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource">reset_gen_ai_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration">reset_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId">reset_model_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration">reset_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType">reset_template_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gen_ai_resource` <a name="put_gen_ai_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource"></a>

```python
def put_gen_ai_resource(
  agent: BedrockPromptVariantsGenAiResourceAgent = None
) -> None
```

###### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource.parameter.agent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

Target Agent to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}

---

##### `put_inference_configuration` <a name="put_inference_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration"></a>

```python
def put_inference_configuration(
  text: BedrockPromptVariantsInferenceConfigurationText = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration.parameter.text"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

Prompt model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata"></a>

```python
def put_metadata(
  value: IResolvable | typing.List[BedrockPromptVariantsMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]

---

##### `put_template_configuration` <a name="put_template_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration"></a>

```python
def put_template_configuration(
  chat: BedrockPromptVariantsTemplateConfigurationChat = None,
  text: BedrockPromptVariantsTemplateConfigurationText = None
) -> None
```

###### `chat`<sup>Optional</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration.parameter.chat"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration.parameter.text"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

Configuration for text prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `reset_additional_model_request_fields` <a name="reset_additional_model_request_fields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields"></a>

```python
def reset_additional_model_request_fields() -> None
```

##### `reset_gen_ai_resource` <a name="reset_gen_ai_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource"></a>

```python
def reset_gen_ai_resource() -> None
```

##### `reset_inference_configuration` <a name="reset_inference_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration"></a>

```python
def reset_inference_configuration() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_model_id` <a name="reset_model_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId"></a>

```python
def reset_model_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_template_configuration` <a name="reset_template_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration"></a>

```python
def reset_template_configuration() -> None
```

##### `reset_template_type` <a name="reset_template_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType"></a>

```python
def reset_template_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource">gen_ai_resource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput">additional_model_request_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput">gen_ai_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput">inference_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput">template_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput">template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gen_ai_resource`<sup>Required</sup> <a name="gen_ai_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource"></a>

```python
gen_ai_resource: BedrockPromptVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockPromptVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata"></a>

```python
metadata: BedrockPromptVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a>

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```python
template_configuration: BedrockPromptVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `additional_model_request_fields_input`<sup>Optional</sup> <a name="additional_model_request_fields_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput"></a>

```python
additional_model_request_fields_input: str
```

- *Type:* str

---

##### `gen_ai_resource_input`<sup>Optional</sup> <a name="gen_ai_resource_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput"></a>

```python
gen_ai_resource_input: IResolvable | BedrockPromptVariantsGenAiResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `inference_configuration_input`<sup>Optional</sup> <a name="inference_configuration_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput"></a>

```python
inference_configuration_input: IResolvable | BedrockPromptVariantsInferenceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput"></a>

```python
metadata_input: IResolvable | typing.List[BedrockPromptVariantsMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>]

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `template_configuration_input`<sup>Optional</sup> <a name="template_configuration_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput"></a>

```python
template_configuration_input: IResolvable | BedrockPromptVariantsTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `template_type_input`<sup>Optional</sup> <a name="template_type_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput"></a>

```python
template_type_input: str
```

- *Type:* str

---

##### `additional_model_request_fields`<sup>Required</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariants
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessagesContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint">put_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint">reset_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_point` <a name="put_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint"></a>

```python
def put_cache_point(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint.parameter.type"></a>

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

##### `reset_cache_point` <a name="reset_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint"></a>

```python
def reset_cache_point() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput">cache_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `cache_point_input`<sup>Optional</sup> <a name="cache_point_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput"></a>

```python
cache_point_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent"></a>

```python
def put_content(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessagesContent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```python
content: BedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput"></a>

```python
content_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessagesContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### BedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables">put_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages">put_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute">put_system_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration">put_tool_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables">reset_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration">reset_tool_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_variables` <a name="put_input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables"></a>

```python
def put_input_variables(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]

---

##### `put_messages` <a name="put_messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages"></a>

```python
def put_messages(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]

---

##### `put_system_attribute` <a name="put_system_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute"></a>

```python
def put_system_attribute(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]

---

##### `put_tool_configuration` <a name="put_tool_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration"></a>

```python
def put_tool_configuration(
  tool_choice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice = None,
  tools: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools] = None
) -> None
```

###### `tool_choice`<sup>Optional</sup> <a name="tool_choice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.toolChoice"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}

---

###### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.tools"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]

List of Tools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}

---

##### `reset_input_variables` <a name="reset_input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables"></a>

```python
def reset_input_variables() -> None
```

##### `reset_messages` <a name="reset_messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```

##### `reset_tool_configuration` <a name="reset_tool_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration"></a>

```python
def reset_tool_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">system_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">tool_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput">input_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput">messages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput">tool_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```python
input_variables: BedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```python
messages: BedrockPromptVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```python
system_attribute: BedrockPromptVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `tool_configuration`<sup>Required</sup> <a name="tool_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```python
tool_configuration: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `input_variables_input`<sup>Optional</sup> <a name="input_variables_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput"></a>

```python
input_variables_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput"></a>

```python
messages_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]

---

##### `tool_configuration_input`<sup>Optional</sup> <a name="tool_configuration_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput"></a>

```python
tool_configuration_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemList <a name="BedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]

---


### BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint">put_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint">reset_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_point` <a name="put_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint"></a>

```python
def put_cache_point(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint.parameter.type"></a>

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

##### `reset_cache_point` <a name="reset_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint"></a>

```python
def reset_cache_point() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput">cache_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `cache_point_input`<sup>Optional</sup> <a name="cache_point_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput"></a>

```python
cache_point_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice">put_tool_choice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools">put_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice">reset_tool_choice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools">reset_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tool_choice` <a name="put_tool_choice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice"></a>

```python
def put_tool_choice(
  any: str = None,
  auto: str = None,
  tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool = None
) -> None
```

###### `any`<sup>Optional</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.any"></a>

- *Type:* str

Any Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}

---

###### `auto`<sup>Optional</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.auto"></a>

- *Type:* str

Auto Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}

---

###### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.tool"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

Specific Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}

---

##### `put_tools` <a name="put_tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools"></a>

```python
def put_tools(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]

---

##### `reset_tool_choice` <a name="reset_tool_choice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice"></a>

```python
def reset_tool_choice() -> None
```

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools"></a>

```python
def reset_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">tool_choice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput">tool_choice_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput">tools_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_choice`<sup>Required</sup> <a name="tool_choice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```python
tool_choice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```python
tools: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `tool_choice_input`<sup>Optional</sup> <a name="tool_choice_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput"></a>

```python
tool_choice_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput"></a>

```python
tools_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool">put_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny">reset_any</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto">reset_auto</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool">reset_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tool` <a name="put_tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool"></a>

```python
def put_tool(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool.parameter.name"></a>

- *Type:* str

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `reset_any` <a name="reset_any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny"></a>

```python
def reset_any() -> None
```

##### `reset_auto` <a name="reset_auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto"></a>

```python
def reset_auto() -> None
```

##### `reset_tool` <a name="reset_tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool"></a>

```python
def reset_tool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput">any_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput">auto_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput">tool_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```python
tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `any_input`<sup>Optional</sup> <a name="any_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput"></a>

```python
any_input: str
```

- *Type:* str

---

##### `auto_input`<sup>Optional</sup> <a name="auto_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput"></a>

```python
auto_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput"></a>

```python
tool_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```python
any: str
```

- *Type:* str

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```python
auto: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>]

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint">put_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec">put_tool_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint">reset_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec">reset_tool_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_point` <a name="put_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint"></a>

```python
def put_cache_point(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint.parameter.type"></a>

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

##### `put_tool_spec` <a name="put_tool_spec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec"></a>

```python
def put_tool_spec(
  description: str = None,
  input_schema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema = None,
  name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}.

---

###### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.inputSchema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

Tool input schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.name"></a>

- *Type:* str

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `reset_cache_point` <a name="reset_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint"></a>

```python
def reset_cache_point() -> None
```

##### `reset_tool_spec` <a name="reset_tool_spec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec"></a>

```python
def reset_tool_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">tool_spec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput">cache_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput">tool_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `tool_spec`<sup>Required</sup> <a name="tool_spec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```python
tool_spec: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `cache_point_input`<sup>Optional</sup> <a name="cache_point_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput"></a>

```python
cache_point_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `tool_spec_input`<sup>Optional</sup> <a name="tool_spec_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput"></a>

```python
tool_spec_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson">reset_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json` <a name="reset_json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson"></a>

```python
def reset_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput">json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput"></a>

```python
json_input: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema">put_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_schema` <a name="put_input_schema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema"></a>

```python
def put_input_schema(
  json: str = None
) -> None
```

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema.parameter.json"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">input_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput">input_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```python
input_schema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput"></a>

```python
input_schema_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### BedrockPromptVariantsTemplateConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat">put_chat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat">reset_chat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chat` <a name="put_chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat"></a>

```python
def put_chat(
  input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatInputVariables] = None,
  messages: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatMessages] = None,
  system_attribute: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationChatSystem] = None,
  tool_configuration: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration = None
) -> None
```

###### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.inputVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

###### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.messages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>]

List of messages for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}

---

###### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.systemAttribute"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>]

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}

---

###### `tool_configuration`<sup>Optional</sup> <a name="tool_configuration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.toolConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

Tool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}

---

##### `put_text` <a name="put_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText"></a>

```python
def put_text(
  cache_point: BedrockPromptVariantsTemplateConfigurationTextCachePoint = None,
  input_variables: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables] = None,
  text: str = None,
  text_s3_location: BedrockPromptVariantsTemplateConfigurationTextTextS3Location = None
) -> None
```

###### `cache_point`<sup>Optional</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.cachePoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

###### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.inputVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.text"></a>

- *Type:* str

Prompt content for String prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

###### `text_s3_location`<sup>Optional</sup> <a name="text_s3_location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.textS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}

---

##### `reset_chat` <a name="reset_chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat"></a>

```python
def reset_chat() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput">chat_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput">text_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```python
chat: BedrockPromptVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```python
text: BedrockPromptVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `chat_input`<sup>Optional</sup> <a name="chat_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput"></a>

```python
chat_input: IResolvable | BedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput"></a>

```python
text_input: IResolvable | BedrockPromptVariantsTemplateConfigurationText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint">put_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables">put_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location">put_text_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint">reset_cache_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables">reset_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location">reset_text_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_point` <a name="put_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint"></a>

```python
def put_cache_point(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint.parameter.type"></a>

- *Type:* str

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

##### `put_input_variables` <a name="put_input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables"></a>

```python
def put_input_variables(
  value: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]

---

##### `put_text_s3_location` <a name="put_text_s3_location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location"></a>

```python
def put_text_s3_location(
  bucket: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.bucket"></a>

- *Type:* str

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.key"></a>

- *Type:* str

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.version"></a>

- *Type:* str

The version of the the S3 object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}

---

##### `reset_cache_point` <a name="reset_cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint"></a>

```python
def reset_cache_point() -> None
```

##### `reset_input_variables` <a name="reset_input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables"></a>

```python
def reset_input_variables() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_s3_location` <a name="reset_text_s3_location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location"></a>

```python
def reset_text_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">text_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput">cache_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput">input_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput">text_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```python
cache_point: BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```python
input_variables: BedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `text_s3_location`<sup>Required</sup> <a name="text_s3_location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```python
text_s3_location: BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `cache_point_input`<sup>Optional</sup> <a name="cache_point_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput"></a>

```python
cache_point_input: IResolvable | BedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `input_variables_input`<sup>Optional</sup> <a name="input_variables_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput"></a>

```python
input_variables_input: IResolvable | typing.List[BedrockPromptVariantsTemplateConfigurationTextInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>]

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text_s3_location_input`<sup>Optional</sup> <a name="text_s3_location_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput"></a>

```python
text_s3_location_input: IResolvable | BedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---


### BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_prompt

bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



