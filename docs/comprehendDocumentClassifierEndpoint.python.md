# `comprehendDocumentClassifierEndpoint` Submodule <a name="`comprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifierEndpoint <a name="ComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  desired_inference_units: typing.Union[int, float],
  endpoint_name: str,
  model_arn: str,
  tags: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.desiredInferenceUnits">desired_inference_units</a></code> | <code>typing.Union[int, float]</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.modelArn">model_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]</code> | Tags associated with the endpoint being created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `desired_inference_units`<sup>Required</sup> <a name="desired_inference_units" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.desiredInferenceUnits"></a>

- *Type:* typing.Union[int, float]

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#desired_inference_units ComprehendDocumentClassifierEndpoint#desired_inference_units}

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#endpoint_name ComprehendDocumentClassifierEndpoint#endpoint_name}

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.modelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#model_arn ComprehendDocumentClassifierEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#tags ComprehendDocumentClassifierEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComprehendDocumentClassifierEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">current_inference_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput">desired_inference_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput">model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">desired_inference_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `current_inference_units`<sup>Required</sup> <a name="current_inference_units" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```python
current_inference_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags"></a>

```python
tags: ComprehendDocumentClassifierEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a>

---

##### `desired_inference_units_input`<sup>Optional</sup> <a name="desired_inference_units_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput"></a>

```python
desired_inference_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `model_arn_input`<sup>Optional</sup> <a name="model_arn_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput"></a>

```python
model_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]

---

##### `desired_inference_units`<sup>Required</sup> <a name="desired_inference_units" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```python
desired_inference_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierEndpointConfig <a name="ComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  desired_inference_units: typing.Union[int, float],
  endpoint_name: str,
  model_arn: str,
  tags: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits">desired_inference_units</a></code> | <code>typing.Union[int, float]</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn">model_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]</code> | Tags associated with the endpoint being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `desired_inference_units`<sup>Required</sup> <a name="desired_inference_units" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits"></a>

```python
desired_inference_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#desired_inference_units ComprehendDocumentClassifierEndpoint#desired_inference_units}

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#endpoint_name ComprehendDocumentClassifierEndpoint#endpoint_name}

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#model_arn ComprehendDocumentClassifierEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#tags ComprehendDocumentClassifierEndpoint#tags}

---

### ComprehendDocumentClassifierEndpointTags <a name="ComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key">key</a></code> | <code>str</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value">value</a></code> | <code>str</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#key ComprehendDocumentClassifierEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#value ComprehendDocumentClassifierEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierEndpointTagsList <a name="ComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendDocumentClassifierEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendDocumentClassifierEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>]

---


### ComprehendDocumentClassifierEndpointTagsOutputReference <a name="ComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier_endpoint

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>

---



