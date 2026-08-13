# `bedrockKnowledgeBasePolicy` Submodule <a name="`bedrockKnowledgeBasePolicy` Submodule" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockKnowledgeBasePolicy <a name="BedrockKnowledgeBasePolicy" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy awscc_bedrock_knowledge_base_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  knowledge_base_id: str,
  policy_document: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | The unique identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | The IAM policy document defining access permissions for the knowledge base. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

The unique identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy#knowledge_base_id BedrockKnowledgeBasePolicy#knowledge_base_id}

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.policyDocument"></a>

- *Type:* str

The IAM policy document defining access permissions for the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy#policy_document BedrockKnowledgeBasePolicy#policy_document}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockKnowledgeBasePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockKnowledgeBasePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockKnowledgeBasePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockKnowledgeBasePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockKnowledgeBasePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockKnowledgeBasePolicyConfig <a name="BedrockKnowledgeBasePolicyConfig" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_knowledge_base_policy

bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  knowledge_base_id: str,
  policy_document: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | The unique identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | The IAM policy document defining access permissions for the knowledge base. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

The unique identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy#knowledge_base_id BedrockKnowledgeBasePolicy#knowledge_base_id}

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

The IAM policy document defining access permissions for the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_knowledge_base_policy#policy_document BedrockKnowledgeBasePolicy#policy_document}

---



