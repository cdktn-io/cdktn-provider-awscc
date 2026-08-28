# `dataAwsccSystemsmanagersapApplication` Submodule <a name="`dataAwsccSystemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSystemsmanagersapApplication <a name="DataAwsccSystemsmanagersapApplication" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/systemsmanagersap_application#id DataAwsccSystemsmanagersapApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSystemsmanagersapApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.componentsInfo">components_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList">DataAwsccSystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList">DataAwsccSystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.databaseArn">database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.sapInstanceNumber">sap_instance_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList">DataAwsccSystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `components_info`<sup>Required</sup> <a name="components_info" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.componentsInfo"></a>

```python
components_info: DataAwsccSystemsmanagersapApplicationComponentsInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList">DataAwsccSystemsmanagersapApplicationComponentsInfoList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.credentials"></a>

```python
credentials: DataAwsccSystemsmanagersapApplicationCredentialsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList">DataAwsccSystemsmanagersapApplicationCredentialsList</a>

---

##### `database_arn`<sup>Required</sup> <a name="database_arn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sap_instance_number`<sup>Required</sup> <a name="sap_instance_number" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.sapInstanceNumber"></a>

```python
sap_instance_number: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.tags"></a>

```python
tags: DataAwsccSystemsmanagersapApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList">DataAwsccSystemsmanagersapApplicationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSystemsmanagersapApplicationComponentsInfo <a name="DataAwsccSystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfo()
```


### DataAwsccSystemsmanagersapApplicationConfig <a name="DataAwsccSystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/systemsmanagersap_application#id DataAwsccSystemsmanagersapApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSystemsmanagersapApplicationCredentials <a name="DataAwsccSystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentials()
```


### DataAwsccSystemsmanagersapApplicationTags <a name="DataAwsccSystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSystemsmanagersapApplicationComponentsInfoList <a name="DataAwsccSystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference <a name="DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">component_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">ec2_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfo">DataAwsccSystemsmanagersapApplicationComponentsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_type`<sup>Required</sup> <a name="component_type" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

---

##### `ec2_instance_id`<sup>Required</sup> <a name="ec2_instance_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```python
ec2_instance_id: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSystemsmanagersapApplicationComponentsInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationComponentsInfo">DataAwsccSystemsmanagersapApplicationComponentsInfo</a>

---


### DataAwsccSystemsmanagersapApplicationCredentialsList <a name="DataAwsccSystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSystemsmanagersapApplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSystemsmanagersapApplicationCredentialsOutputReference <a name="DataAwsccSystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentials">DataAwsccSystemsmanagersapApplicationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSystemsmanagersapApplicationCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationCredentials">DataAwsccSystemsmanagersapApplicationCredentials</a>

---


### DataAwsccSystemsmanagersapApplicationTagsList <a name="DataAwsccSystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSystemsmanagersapApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSystemsmanagersapApplicationTagsOutputReference <a name="DataAwsccSystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_systemsmanagersap_application

dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTags">DataAwsccSystemsmanagersapApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSystemsmanagersapApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSystemsmanagersapApplication.DataAwsccSystemsmanagersapApplicationTags">DataAwsccSystemsmanagersapApplicationTags</a>

---



