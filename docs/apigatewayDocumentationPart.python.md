# `apigatewayDocumentationPart` Submodule <a name="`apigatewayDocumentationPart` Submodule" id="@cdktn/provider-awscc.apigatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDocumentationPart <a name="ApigatewayDocumentationPart" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part awscc_apigateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPart(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: ApigatewayDocumentationPartLocation,
  properties: str,
  rest_api_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.properties">properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

`Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.properties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation">put_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation"></a>

```python
def put_location(
  method: str = None,
  name: str = None,
  path: str = None,
  status_code: str = None,
  type: str = None
) -> None
```

###### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}.

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPart.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPart.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPart.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPart.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayDocumentationPart to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId">documentation_part_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `documentation_part_id`<sup>Required</sup> <a name="documentation_part_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId"></a>

```python
documentation_part_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location"></a>

```python
location: ApigatewayDocumentationPartLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput"></a>

```python
location_input: IResolvable | ApigatewayDocumentationPartLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDocumentationPartConfig <a name="ApigatewayDocumentationPartConfig" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPartConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: ApigatewayDocumentationPartLocation,
  properties: str,
  rest_api_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location"></a>

```python
location: ApigatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

`Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties"></a>

```python
properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

### ApigatewayDocumentationPartLocation <a name="ApigatewayDocumentationPartLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPartLocation(
  method: str = None,
  name: str = None,
  path: str = None,
  status_code: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDocumentationPartLocationOutputReference <a name="ApigatewayDocumentationPartLocationOutputReference" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_documentation_part

apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDocumentationPartLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---



