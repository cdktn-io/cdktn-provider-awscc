# `dataAwsccOpensearchserviceDomain` Submodule <a name="`dataAwsccOpensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserviceDomain <a name="DataAwsccOpensearchserviceDomain" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchservice_domain#id DataAwsccOpensearchserviceDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOpensearchserviceDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.accessPolicies">access_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedOptions">advanced_options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.aimlOptions">aiml_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.automatedSnapshotPauseOptions">automated_snapshot_pause_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference">DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.deploymentStrategyOptions">deployment_strategy_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference">DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainArn">domain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoint">domain_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference">DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoints">domain_endpoints</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointV2">domain_endpoint_v2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference">DataAwsccOpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference">DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineMode">engine_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.identityCenterOptions">identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap">DataAwsccOpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.nodeToNodeEncryptionOptions">node_to_node_encryption_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.offPeakWindowOptions">off_peak_window_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.serviceSoftwareOptions">service_software_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference">DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.skipShardMigrationWait">skip_shard_migration_wait</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference">DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.softwareUpdateOptions">software_update_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference">DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList">DataAwsccOpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.useCase">use_case</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference">DataAwsccOpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_policies`<sup>Required</sup> <a name="access_policies" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedOptions"></a>

```python
advanced_options: StringMap
```

- *Type:* cdktn.StringMap

---

##### `advanced_security_options`<sup>Required</sup> <a name="advanced_security_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedSecurityOptions"></a>

```python
advanced_security_options: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `aiml_options`<sup>Required</sup> <a name="aiml_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.aimlOptions"></a>

```python
aiml_options: DataAwsccOpensearchserviceDomainAimlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `automated_snapshot_pause_options`<sup>Required</sup> <a name="automated_snapshot_pause_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```python
automated_snapshot_pause_options: DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.clusterConfig"></a>

```python
cluster_config: DataAwsccOpensearchserviceDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `cognito_options`<sup>Required</sup> <a name="cognito_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cognitoOptions"></a>

```python
cognito_options: DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference">DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `deployment_strategy_options`<sup>Required</sup> <a name="deployment_strategy_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```python
deployment_strategy_options: DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference">DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `domain_arn`<sup>Required</sup> <a name="domain_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainArn"></a>

```python
domain_arn: str
```

- *Type:* str

---

##### `domain_endpoint`<sup>Required</sup> <a name="domain_endpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoint"></a>

```python
domain_endpoint: str
```

- *Type:* str

---

##### `domain_endpoint_options`<sup>Required</sup> <a name="domain_endpoint_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference">DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `domain_endpoints`<sup>Required</sup> <a name="domain_endpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoints"></a>

```python
domain_endpoints: StringMap
```

- *Type:* cdktn.StringMap

---

##### `domain_endpoint_v2`<sup>Required</sup> <a name="domain_endpoint_v2" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointV2"></a>

```python
domain_endpoint_v2: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ebs_options`<sup>Required</sup> <a name="ebs_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ebsOptions"></a>

```python
ebs_options: DataAwsccOpensearchserviceDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference">DataAwsccOpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `encryption_at_rest_options`<sup>Required</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference">DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `engine_mode`<sup>Required</sup> <a name="engine_mode" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineMode"></a>

```python
engine_mode: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `identity_center_options`<sup>Required</sup> <a name="identity_center_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.identityCenterOptions"></a>

```python
identity_center_options: DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.logPublishingOptions"></a>

```python
log_publishing_options: DataAwsccOpensearchserviceDomainLogPublishingOptionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap">DataAwsccOpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `node_to_node_encryption_options`<sup>Required</sup> <a name="node_to_node_encryption_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```python
node_to_node_encryption_options: DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `off_peak_window_options`<sup>Required</sup> <a name="off_peak_window_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.offPeakWindowOptions"></a>

```python
off_peak_window_options: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `service_software_options`<sup>Required</sup> <a name="service_software_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```python
service_software_options: DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference">DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `skip_shard_migration_wait`<sup>Required</sup> <a name="skip_shard_migration_wait" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.skipShardMigrationWait"></a>

```python
skip_shard_migration_wait: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `snapshot_options`<sup>Required</sup> <a name="snapshot_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.snapshotOptions"></a>

```python
snapshot_options: DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference">DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `software_update_options`<sup>Required</sup> <a name="software_update_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.softwareUpdateOptions"></a>

```python
software_update_options: DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference">DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tags"></a>

```python
tags: DataAwsccOpensearchserviceDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList">DataAwsccOpensearchserviceDomainTagsList</a>

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.vpcOptions"></a>

```python
vpc_options: DataAwsccOpensearchserviceDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference">DataAwsccOpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserviceDomainAdvancedSecurityOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions()
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions()
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions()
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions()
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions()
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp()
```


### DataAwsccOpensearchserviceDomainAimlOptions <a name="DataAwsccOpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions()
```


### DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine()
```


### DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration()
```


### DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions()
```


### DataAwsccOpensearchserviceDomainClusterConfig <a name="DataAwsccOpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig()
```


### DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions <a name="DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions()
```


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptions <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions()
```


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig()
```


### DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig()
```


### DataAwsccOpensearchserviceDomainCognitoOptions <a name="DataAwsccOpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions()
```


### DataAwsccOpensearchserviceDomainConfig <a name="DataAwsccOpensearchserviceDomainConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchservice_domain#id DataAwsccOpensearchserviceDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserviceDomainDeploymentStrategyOptions <a name="DataAwsccOpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions()
```


### DataAwsccOpensearchserviceDomainDomainEndpointOptions <a name="DataAwsccOpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions()
```


### DataAwsccOpensearchserviceDomainEbsOptions <a name="DataAwsccOpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions()
```


### DataAwsccOpensearchserviceDomainEncryptionAtRestOptions <a name="DataAwsccOpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions()
```


### DataAwsccOpensearchserviceDomainIdentityCenterOptions <a name="DataAwsccOpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions()
```


### DataAwsccOpensearchserviceDomainLogPublishingOptions <a name="DataAwsccOpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions()
```


### DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions <a name="DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions()
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptions <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions()
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow()
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime()
```


### DataAwsccOpensearchserviceDomainServiceSoftwareOptions <a name="DataAwsccOpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions()
```


### DataAwsccOpensearchserviceDomainSnapshotOptions <a name="DataAwsccOpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions()
```


### DataAwsccOpensearchserviceDomainSoftwareUpdateOptions <a name="DataAwsccOpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions()
```


### DataAwsccOpensearchserviceDomainTags <a name="DataAwsccOpensearchserviceDomainTags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags()
```


### DataAwsccOpensearchserviceDomainVpcOptions <a name="DataAwsccOpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_arn`<sup>Required</sup> <a name="master_user_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">anonymous_auth_disable_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymous_auth_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">jwt_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anonymous_auth_disable_date`<sup>Required</sup> <a name="anonymous_auth_disable_date" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```python
anonymous_auth_disable_date: str
```

- *Type:* str

---

##### `anonymous_auth_enabled`<sup>Required</sup> <a name="anonymous_auth_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```python
anonymous_auth_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iam_federation_options`<sup>Required</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```python
iam_federation_options: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `internal_user_database_enabled`<sup>Required</sup> <a name="internal_user_database_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `jwt_options`<sup>Required</sup> <a name="jwt_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```python
jwt_options: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `master_user_options`<sup>Required</sup> <a name="master_user_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```python
master_user_options: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```python
saml_options: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadata_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `metadata_content`<sup>Required</sup> <a name="metadata_content" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```python
metadata_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">master_backend_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```python
idp: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `master_backend_role`<sup>Required</sup> <a name="master_backend_role" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```python
master_backend_role: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">s3_vectors_engine</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">serverless_vector_acceleration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions">DataAwsccOpensearchserviceDomainAimlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_vectors_engine`<sup>Required</sup> <a name="s3_vectors_engine" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```python
s3_vectors_engine: DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `serverless_vector_acceleration`<sup>Required</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```python
serverless_vector_acceleration: DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAimlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions">DataAwsccOpensearchserviceDomainAimlOptions</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---


### DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions">DataAwsccOpensearchserviceDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```python
node_config: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainClusterConfigNodeOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions">DataAwsccOpensearchserviceDomainClusterConfigNodeOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">multi_az_with_standby_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">node_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">warm_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmType">warm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig">DataAwsccOpensearchserviceDomainClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cold_storage_options`<sup>Required</sup> <a name="cold_storage_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```python
cold_storage_options: DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `dedicated_master_count`<sup>Required</sup> <a name="dedicated_master_count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled`<sup>Required</sup> <a name="dedicated_master_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `dedicated_master_type`<sup>Required</sup> <a name="dedicated_master_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `multi_az_with_standby_enabled`<sup>Required</sup> <a name="multi_az_with_standby_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```python
multi_az_with_standby_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `node_options`<sup>Required</sup> <a name="node_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```python
node_options: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `warm_count`<sup>Required</sup> <a name="warm_count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled`<sup>Required</sup> <a name="warm_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```python
warm_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `warm_type`<sup>Required</sup> <a name="warm_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

---

##### `zone_awareness_config`<sup>Required</sup> <a name="zone_awareness_config" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `zone_awareness_enabled`<sup>Required</sup> <a name="zone_awareness_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig">DataAwsccOpensearchserviceDomainClusterConfig</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_count`<sup>Required</sup> <a name="availability_zone_count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions">DataAwsccOpensearchserviceDomainCognitoOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainCognitoOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions">DataAwsccOpensearchserviceDomainCognitoOptions</a>

---


### DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">deployment_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions">DataAwsccOpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_strategy`<sup>Required</sup> <a name="deployment_strategy" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```python
deployment_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainDeploymentStrategyOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions">DataAwsccOpensearchserviceDomainDeploymentStrategyOptions</a>

---


### DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforce_https</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions">DataAwsccOpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn`<sup>Required</sup> <a name="custom_endpoint_certificate_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

---

##### `custom_endpoint_enabled`<sup>Required</sup> <a name="custom_endpoint_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enforce_https`<sup>Required</sup> <a name="enforce_https" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```python
enforce_https: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tls_security_policy`<sup>Required</sup> <a name="tls_security_policy" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions">DataAwsccOpensearchserviceDomainDomainEndpointOptions</a>

---


### DataAwsccOpensearchserviceDomainEbsOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">ebs_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions">DataAwsccOpensearchserviceDomainEbsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```python
ebs_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainEbsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions">DataAwsccOpensearchserviceDomainEbsOptions</a>

---


### DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions">DataAwsccOpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainEncryptionAtRestOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions">DataAwsccOpensearchserviceDomainEncryptionAtRestOptions</a>

---


### DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">enabled_api_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions">DataAwsccOpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_api_access`<sup>Required</sup> <a name="enabled_api_access" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```python
enabled_api_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `identity_center_application_arn`<sup>Required</sup> <a name="identity_center_application_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```python
identity_center_application_arn: str
```

- *Type:* str

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions">DataAwsccOpensearchserviceDomainIdentityCenterOptions</a>

---


### DataAwsccOpensearchserviceDomainLogPublishingOptionsMap <a name="DataAwsccOpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions">DataAwsccOpensearchserviceDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn`<sup>Required</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainLogPublishingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions">DataAwsccOpensearchserviceDomainLogPublishingOptions</a>

---


### DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```python
window_start_time: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">off_peak_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions">DataAwsccOpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `off_peak_window`<sup>Required</sup> <a name="off_peak_window" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```python
off_peak_window: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions">DataAwsccOpensearchserviceDomainOffPeakWindowOptions</a>

---


### DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">automated_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">cancellable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">new_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">optional_deployment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">update_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions">DataAwsccOpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_update_date`<sup>Required</sup> <a name="automated_update_date" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```python
automated_update_date: str
```

- *Type:* str

---

##### `cancellable`<sup>Required</sup> <a name="cancellable" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```python
cancellable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `new_version`<sup>Required</sup> <a name="new_version" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```python
new_version: str
```

- *Type:* str

---

##### `optional_deployment`<sup>Required</sup> <a name="optional_deployment" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```python
optional_deployment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `update_available`<sup>Required</sup> <a name="update_available" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```python
update_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainServiceSoftwareOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions">DataAwsccOpensearchserviceDomainServiceSoftwareOptions</a>

---


### DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions">DataAwsccOpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainSnapshotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions">DataAwsccOpensearchserviceDomainSnapshotOptions</a>

---


### DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">auto_software_update_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions">DataAwsccOpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_software_update_enabled`<sup>Required</sup> <a name="auto_software_update_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```python
auto_software_update_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions">DataAwsccOpensearchserviceDomainSoftwareUpdateOptions</a>

---


### DataAwsccOpensearchserviceDomainTagsList <a name="DataAwsccOpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOpensearchserviceDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOpensearchserviceDomainTagsOutputReference <a name="DataAwsccOpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags">DataAwsccOpensearchserviceDomainTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags">DataAwsccOpensearchserviceDomainTags</a>

---


### DataAwsccOpensearchserviceDomainVpcOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchservice_domain

dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">egress_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions">DataAwsccOpensearchserviceDomainVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_enabled`<sup>Required</sup> <a name="egress_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```python
egress_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserviceDomainVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions">DataAwsccOpensearchserviceDomainVpcOptions</a>

---



