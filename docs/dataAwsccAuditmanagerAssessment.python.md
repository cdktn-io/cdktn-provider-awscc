# `dataAwsccAuditmanagerAssessment` Submodule <a name="`dataAwsccAuditmanagerAssessment` Submodule" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAuditmanagerAssessment <a name="DataAwsccAuditmanagerAssessment" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/auditmanager_assessment awscc_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/auditmanager_assessment#id DataAwsccAuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAuditmanagerAssessment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAuditmanagerAssessment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAuditmanagerAssessment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAuditmanagerAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAuditmanagerAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.assessmentReportsDestination">assessment_reports_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference">DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.awsAccount">aws_account</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference">DataAwsccAuditmanagerAssessmentAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.delegations">delegations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList">DataAwsccAuditmanagerAssessmentDelegationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList">DataAwsccAuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference">DataAwsccAuditmanagerAssessmentScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList">DataAwsccAuditmanagerAssessmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `assessment_reports_destination`<sup>Required</sup> <a name="assessment_reports_destination" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.assessmentReportsDestination"></a>

```python
assessment_reports_destination: DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference">DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a>

---

##### `aws_account`<sup>Required</sup> <a name="aws_account" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.awsAccount"></a>

```python
aws_account: DataAwsccAuditmanagerAssessmentAwsAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference">DataAwsccAuditmanagerAssessmentAwsAccountOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegations`<sup>Required</sup> <a name="delegations" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.delegations"></a>

```python
delegations: DataAwsccAuditmanagerAssessmentDelegationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList">DataAwsccAuditmanagerAssessmentDelegationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.roles"></a>

```python
roles: DataAwsccAuditmanagerAssessmentRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList">DataAwsccAuditmanagerAssessmentRolesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.scope"></a>

```python
scope: DataAwsccAuditmanagerAssessmentScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference">DataAwsccAuditmanagerAssessmentScopeOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.tags"></a>

```python
tags: DataAwsccAuditmanagerAssessmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList">DataAwsccAuditmanagerAssessmentTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAuditmanagerAssessmentAssessmentReportsDestination <a name="DataAwsccAuditmanagerAssessmentAssessmentReportsDestination" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestination()
```


### DataAwsccAuditmanagerAssessmentAwsAccount <a name="DataAwsccAuditmanagerAssessmentAwsAccount" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccount()
```


### DataAwsccAuditmanagerAssessmentConfig <a name="DataAwsccAuditmanagerAssessmentConfig" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/auditmanager_assessment#id DataAwsccAuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAuditmanagerAssessmentDelegations <a name="DataAwsccAuditmanagerAssessmentDelegations" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegations()
```


### DataAwsccAuditmanagerAssessmentRoles <a name="DataAwsccAuditmanagerAssessmentRoles" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRoles.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRoles()
```


### DataAwsccAuditmanagerAssessmentScope <a name="DataAwsccAuditmanagerAssessmentScope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScope.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScope()
```


### DataAwsccAuditmanagerAssessmentScopeAwsAccounts <a name="DataAwsccAuditmanagerAssessmentScopeAwsAccounts" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccounts()
```


### DataAwsccAuditmanagerAssessmentScopeAwsServices <a name="DataAwsccAuditmanagerAssessmentScopeAwsServices" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServices()
```


### DataAwsccAuditmanagerAssessmentTags <a name="DataAwsccAuditmanagerAssessmentTags" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestination">DataAwsccAuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentAssessmentReportsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAssessmentReportsDestination">DataAwsccAuditmanagerAssessmentAssessmentReportsDestination</a>

---


### DataAwsccAuditmanagerAssessmentAwsAccountOutputReference <a name="DataAwsccAuditmanagerAssessmentAwsAccountOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccount">DataAwsccAuditmanagerAssessmentAwsAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentAwsAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentAwsAccount">DataAwsccAuditmanagerAssessmentAwsAccount</a>

---


### DataAwsccAuditmanagerAssessmentDelegationsList <a name="DataAwsccAuditmanagerAssessmentDelegationsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAuditmanagerAssessmentDelegationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAuditmanagerAssessmentDelegationsOutputReference <a name="DataAwsccAuditmanagerAssessmentDelegationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.assessmentName">assessment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.controlSetId">control_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated">last_updated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegations">DataAwsccAuditmanagerAssessmentDelegations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `assessment_name`<sup>Required</sup> <a name="assessment_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.assessmentName"></a>

```python
assessment_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `control_set_id`<sup>Required</sup> <a name="control_set_id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.controlSetId"></a>

```python
control_set_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated"></a>

```python
last_updated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentDelegations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentDelegations">DataAwsccAuditmanagerAssessmentDelegations</a>

---


### DataAwsccAuditmanagerAssessmentRolesList <a name="DataAwsccAuditmanagerAssessmentRolesList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAuditmanagerAssessmentRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAuditmanagerAssessmentRolesOutputReference <a name="DataAwsccAuditmanagerAssessmentRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRoles">DataAwsccAuditmanagerAssessmentRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentRoles">DataAwsccAuditmanagerAssessmentRoles</a>

---


### DataAwsccAuditmanagerAssessmentScopeAwsAccountsList <a name="DataAwsccAuditmanagerAssessmentScopeAwsAccountsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccounts">DataAwsccAuditmanagerAssessmentScopeAwsAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentScopeAwsAccounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccounts">DataAwsccAuditmanagerAssessmentScopeAwsAccounts</a>

---


### DataAwsccAuditmanagerAssessmentScopeAwsServicesList <a name="DataAwsccAuditmanagerAssessmentScopeAwsServicesList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference <a name="DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServices">DataAwsccAuditmanagerAssessmentScopeAwsServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentScopeAwsServices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServices">DataAwsccAuditmanagerAssessmentScopeAwsServices</a>

---


### DataAwsccAuditmanagerAssessmentScopeOutputReference <a name="DataAwsccAuditmanagerAssessmentScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.awsAccounts">aws_accounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList">DataAwsccAuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.awsServices">aws_services</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList">DataAwsccAuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScope">DataAwsccAuditmanagerAssessmentScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_accounts`<sup>Required</sup> <a name="aws_accounts" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```python
aws_accounts: DataAwsccAuditmanagerAssessmentScopeAwsAccountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsAccountsList">DataAwsccAuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `aws_services`<sup>Required</sup> <a name="aws_services" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```python
aws_services: DataAwsccAuditmanagerAssessmentScopeAwsServicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeAwsServicesList">DataAwsccAuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentScope
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentScope">DataAwsccAuditmanagerAssessmentScope</a>

---


### DataAwsccAuditmanagerAssessmentTagsList <a name="DataAwsccAuditmanagerAssessmentTagsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAuditmanagerAssessmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAuditmanagerAssessmentTagsOutputReference <a name="DataAwsccAuditmanagerAssessmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_auditmanager_assessment

dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTags">DataAwsccAuditmanagerAssessmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAuditmanagerAssessmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessment.DataAwsccAuditmanagerAssessmentTags">DataAwsccAuditmanagerAssessmentTags</a>

---



