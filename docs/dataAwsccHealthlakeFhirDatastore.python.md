# `dataAwsccHealthlakeFhirDatastore` Submodule <a name="`dataAwsccHealthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeFhirDatastore <a name="DataAwsccHealthlakeFhirDatastore" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccHealthlakeFhirDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccHealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt">created_at</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn">datastore_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint">datastore_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus">datastore_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion">datastore_type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig">preload_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration">sse_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt"></a>

```python
created_at: DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `datastore_arn`<sup>Required</sup> <a name="datastore_arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn"></a>

```python
datastore_arn: str
```

- *Type:* str

---

##### `datastore_endpoint`<sup>Required</sup> <a name="datastore_endpoint" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```python
datastore_endpoint: str
```

- *Type:* str

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `datastore_status`<sup>Required</sup> <a name="datastore_status" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus"></a>

```python
datastore_status: str
```

- *Type:* str

---

##### `datastore_type_version`<sup>Required</sup> <a name="datastore_type_version" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```python
datastore_type_version: str
```

- *Type:* str

---

##### `identity_provider_configuration`<sup>Required</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `preload_data_config`<sup>Required</sup> <a name="preload_data_config" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig"></a>

```python
preload_data_config: DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `sse_configuration`<sup>Required</sup> <a name="sse_configuration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration"></a>

```python
sse_configuration: DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags"></a>

```python
tags: DataAwsccHealthlakeFhirDatastoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeFhirDatastoreConfig <a name="DataAwsccHealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeFhirDatastoreCreatedAt <a name="DataAwsccHealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt()
```


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration()
```


### DataAwsccHealthlakeFhirDatastorePreloadDataConfig <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig()
```


### DataAwsccHealthlakeFhirDatastoreSseConfiguration <a name="DataAwsccHealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration()
```


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig()
```


### DataAwsccHealthlakeFhirDatastoreTags <a name="DataAwsccHealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference <a name="DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```python
seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastoreCreatedAt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a>

---


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">authorization_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">fine_grained_authorization_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">idp_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_strategy`<sup>Required</sup> <a name="authorization_strategy" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```python
authorization_strategy: str
```

- *Type:* str

---

##### `fine_grained_authorization_enabled`<sup>Required</sup> <a name="fine_grained_authorization_enabled" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```python
fine_grained_authorization_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `idp_lambda_arn`<sup>Required</sup> <a name="idp_lambda_arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```python
idp_lambda_arn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">preload_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preload_data_type`<sup>Required</sup> <a name="preload_data_type" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```python
preload_data_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastorePreloadDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">cmk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_type`<sup>Required</sup> <a name="cmk_type" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```python
cmk_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">kms_encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_encryption_config`<sup>Required</sup> <a name="kms_encryption_config" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```python
kms_encryption_config: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastoreSseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastoreTagsList <a name="DataAwsccHealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccHealthlakeFhirDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccHealthlakeFhirDatastoreTagsOutputReference <a name="DataAwsccHealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_fhir_datastore

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeFhirDatastoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a>

---



