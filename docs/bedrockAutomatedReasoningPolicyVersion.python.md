# `bedrockAutomatedReasoningPolicyVersion` Submodule <a name="`bedrockAutomatedReasoningPolicyVersion` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicyVersion <a name="BedrockAutomatedReasoningPolicyVersion" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version awscc_bedrock_automated_reasoning_policy_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_arn: str,
  last_updated_definition_hash: str = None,
  tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.policyArn">policy_arn</a></code> | <code>str</code> | Arn of the policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.lastUpdatedDefinitionHash">last_updated_definition_hash</a></code> | <code>str</code> | The hash for this version. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.policyArn"></a>

- *Type:* str

Arn of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#policy_arn BedrockAutomatedReasoningPolicyVersion#policy_arn}

---

##### `last_updated_definition_hash`<sup>Optional</sup> <a name="last_updated_definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.lastUpdatedDefinitionHash"></a>

- *Type:* str

The hash for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#last_updated_definition_hash BedrockAutomatedReasoningPolicyVersion#last_updated_definition_hash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetLastUpdatedDefinitionHash">reset_last_updated_definition_hash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]

---

##### `reset_last_updated_definition_hash` <a name="reset_last_updated_definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetLastUpdatedDefinitionHash"></a>

```python
def reset_last_updated_definition_hash() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockAutomatedReasoningPolicyVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockAutomatedReasoningPolicyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.definitionHash">definition_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList">BedrockAutomatedReasoningPolicyVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHashInput">last_updated_definition_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash">last_updated_definition_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `definition_hash`<sup>Required</sup> <a name="definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.definitionHash"></a>

```python
definition_hash: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tags"></a>

```python
tags: BedrockAutomatedReasoningPolicyVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList">BedrockAutomatedReasoningPolicyVersionTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `last_updated_definition_hash_input`<sup>Optional</sup> <a name="last_updated_definition_hash_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHashInput"></a>

```python
last_updated_definition_hash_input: str
```

- *Type:* str

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]

---

##### `last_updated_definition_hash`<sup>Required</sup> <a name="last_updated_definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash"></a>

```python
last_updated_definition_hash: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyVersionConfig <a name="BedrockAutomatedReasoningPolicyVersionConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_arn: str,
  last_updated_definition_hash: str = None,
  tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.policyArn">policy_arn</a></code> | <code>str</code> | Arn of the policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lastUpdatedDefinitionHash">last_updated_definition_hash</a></code> | <code>str</code> | The hash for this version. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

Arn of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#policy_arn BedrockAutomatedReasoningPolicyVersion#policy_arn}

---

##### `last_updated_definition_hash`<sup>Optional</sup> <a name="last_updated_definition_hash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lastUpdatedDefinitionHash"></a>

```python
last_updated_definition_hash: str
```

- *Type:* str

The hash for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#last_updated_definition_hash BedrockAutomatedReasoningPolicyVersion#last_updated_definition_hash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}.

---

### BedrockAutomatedReasoningPolicyVersionTags <a name="BedrockAutomatedReasoningPolicyVersionTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.key">key</a></code> | <code>str</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.value">value</a></code> | <code>str</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#key BedrockAutomatedReasoningPolicyVersion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy_version#value BedrockAutomatedReasoningPolicyVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyVersionTagsList <a name="BedrockAutomatedReasoningPolicyVersionTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAutomatedReasoningPolicyVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAutomatedReasoningPolicyVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>]

---


### BedrockAutomatedReasoningPolicyVersionTagsOutputReference <a name="BedrockAutomatedReasoningPolicyVersionTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_automated_reasoning_policy_version

bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAutomatedReasoningPolicyVersionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>

---



