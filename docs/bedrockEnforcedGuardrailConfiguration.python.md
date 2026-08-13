# `bedrockEnforcedGuardrailConfiguration` Submodule <a name="`bedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockEnforcedGuardrailConfiguration <a name="BedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guardrail_identifier: str,
  guardrail_version: str,
  model_enforcement: BedrockEnforcedGuardrailConfigurationModelEnforcement = None,
  selective_content_guarding: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | Identifier for the guardrail, could be the ID or the ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Numerical guardrail version (not DRAFT). |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement">model_enforcement</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding">selective_content_guarding</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | Selective content guarding controls for enforced guardrails. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailIdentifier"></a>

- *Type:* str

Identifier for the guardrail, could be the ID or the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_identifier BedrockEnforcedGuardrailConfiguration#guardrail_identifier}

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion"></a>

- *Type:* str

Numerical guardrail version (not DRAFT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}

---

##### `model_enforcement`<sup>Optional</sup> <a name="model_enforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `selective_content_guarding`<sup>Optional</sup> <a name="selective_content_guarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

Selective content guarding controls for enforced guardrails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement">put_model_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding">put_selective_content_guarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement">reset_model_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding">reset_selective_content_guarding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_model_enforcement` <a name="put_model_enforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement"></a>

```python
def put_model_enforcement(
  excluded_models: typing.List[str] = None,
  included_models: typing.List[str] = None
) -> None
```

###### `excluded_models`<sup>Optional</sup> <a name="excluded_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.excludedModels"></a>

- *Type:* typing.List[str]

Models to exclude from enforcement. If a model is in both lists, it is excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}

---

###### `included_models`<sup>Optional</sup> <a name="included_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.includedModels"></a>

- *Type:* typing.List[str]

Models to enforce the guardrail on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}

---

##### `put_selective_content_guarding` <a name="put_selective_content_guarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding"></a>

```python
def put_selective_content_guarding(
  messages: str = None,
  system_attribute: str = None
) -> None
```

###### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.messages"></a>

- *Type:* str

Selective guarding mode for user messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}

---

###### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.systemAttribute"></a>

- *Type:* str

Selective guarding mode for system prompts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}

---

##### `reset_model_enforcement` <a name="reset_model_enforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement"></a>

```python
def reset_model_enforcement() -> None
```

##### `reset_selective_content_guarding` <a name="reset_selective_content_guarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding"></a>

```python
def reset_selective_content_guarding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement">model_enforcement</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selective_content_guarding</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifierInput">guardrail_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput">guardrail_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput">model_enforcement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput">selective_content_guarding_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```python
guardrail_arn: str
```

- *Type:* str

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_enforcement`<sup>Required</sup> <a name="model_enforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```python
model_enforcement: BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `selective_content_guarding`<sup>Required</sup> <a name="selective_content_guarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```python
selective_content_guarding: BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `guardrail_identifier_input`<sup>Optional</sup> <a name="guardrail_identifier_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifierInput"></a>

```python
guardrail_identifier_input: str
```

- *Type:* str

---

##### `guardrail_version_input`<sup>Optional</sup> <a name="guardrail_version_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput"></a>

```python
guardrail_version_input: str
```

- *Type:* str

---

##### `model_enforcement_input`<sup>Optional</sup> <a name="model_enforcement_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput"></a>

```python
model_enforcement_input: IResolvable | BedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---

##### `selective_content_guarding_input`<sup>Optional</sup> <a name="selective_content_guarding_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput"></a>

```python
selective_content_guarding_input: IResolvable | BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockEnforcedGuardrailConfigurationConfig <a name="BedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guardrail_identifier: str,
  guardrail_version: str,
  model_enforcement: BedrockEnforcedGuardrailConfigurationModelEnforcement = None,
  selective_content_guarding: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | Identifier for the guardrail, could be the ID or the ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Numerical guardrail version (not DRAFT). |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement">model_enforcement</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding">selective_content_guarding</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | Selective content guarding controls for enforced guardrails. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

Identifier for the guardrail, could be the ID or the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_identifier BedrockEnforcedGuardrailConfiguration#guardrail_identifier}

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

Numerical guardrail version (not DRAFT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}

---

##### `model_enforcement`<sup>Optional</sup> <a name="model_enforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement"></a>

```python
model_enforcement: BedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `selective_content_guarding`<sup>Optional</sup> <a name="selective_content_guarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding"></a>

```python
selective_content_guarding: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

Selective content guarding controls for enforced guardrails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

### BedrockEnforcedGuardrailConfigurationModelEnforcement <a name="BedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement(
  excluded_models: typing.List[str] = None,
  included_models: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels">excluded_models</a></code> | <code>typing.List[str]</code> | Models to exclude from enforcement. If a model is in both lists, it is excluded. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels">included_models</a></code> | <code>typing.List[str]</code> | Models to enforce the guardrail on. |

---

##### `excluded_models`<sup>Optional</sup> <a name="excluded_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels"></a>

```python
excluded_models: typing.List[str]
```

- *Type:* typing.List[str]

Models to exclude from enforcement. If a model is in both lists, it is excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}

---

##### `included_models`<sup>Optional</sup> <a name="included_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels"></a>

```python
included_models: typing.List[str]
```

- *Type:* typing.List[str]

Models to enforce the guardrail on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}

---

### BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding(
  messages: str = None,
  system_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages">messages</a></code> | <code>str</code> | Selective guarding mode for user messages. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute">system_attribute</a></code> | <code>str</code> | Selective guarding mode for system prompts. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages"></a>

```python
messages: str
```

- *Type:* str

Selective guarding mode for user messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

Selective guarding mode for system prompts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetExcludedModels">reset_excluded_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetIncludedModels">reset_included_models</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_models` <a name="reset_excluded_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetExcludedModels"></a>

```python
def reset_excluded_models() -> None
```

##### `reset_included_models` <a name="reset_included_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetIncludedModels"></a>

```python
def reset_included_models() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput">excluded_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput">included_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excluded_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">included_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_models_input`<sup>Optional</sup> <a name="excluded_models_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput"></a>

```python
excluded_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_models_input`<sup>Optional</sup> <a name="included_models_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput"></a>

```python
included_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_models`<sup>Required</sup> <a name="excluded_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```python
excluded_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_models`<sup>Required</sup> <a name="included_models" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```python
included_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_messages` <a name="reset_messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput">messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput"></a>

```python
messages_input: str
```

- *Type:* str

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```python
messages: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



