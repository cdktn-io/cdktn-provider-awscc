# `dataAwsccComprehendDocumentClassifierEndpoint` Submodule <a name="`dataAwsccComprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendDocumentClassifierEndpoint <a name="DataAwsccComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint#id DataAwsccComprehendDocumentClassifierEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccComprehendDocumentClassifierEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">current_inference_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">desired_inference_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `current_inference_units`<sup>Required</sup> <a name="current_inference_units" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```python
current_inference_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_inference_units`<sup>Required</sup> <a name="desired_inference_units" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```python
desired_inference_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags"></a>

```python
tags: DataAwsccComprehendDocumentClassifierEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendDocumentClassifierEndpointConfig <a name="DataAwsccComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint#id DataAwsccComprehendDocumentClassifierEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendDocumentClassifierEndpointTags <a name="DataAwsccComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendDocumentClassifierEndpointTagsList <a name="DataAwsccComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference <a name="DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_document_classifier_endpoint

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendDocumentClassifierEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a>

---



