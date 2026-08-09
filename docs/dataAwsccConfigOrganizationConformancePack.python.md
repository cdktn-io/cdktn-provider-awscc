# `dataAwsccConfigOrganizationConformancePack` Submodule <a name="`dataAwsccConfigOrganizationConformancePack` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigOrganizationConformancePack <a name="DataAwsccConfigOrganizationConformancePack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_organization_conformance_pack awscc_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_organization_conformance_pack#id DataAwsccConfigOrganizationConformancePack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConfigOrganizationConformancePack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConfigOrganizationConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigOrganizationConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList">DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackArn">organization_conformance_pack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackName">organization_conformance_pack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList">DataAwsccConfigOrganizationConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `conformance_pack_input_parameters`<sup>Required</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.conformancePackInputParameters"></a>

```python
conformance_pack_input_parameters: DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList">DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList</a>

---

##### `delivery_s3_bucket`<sup>Required</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix`<sup>Required</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_conformance_pack_arn`<sup>Required</sup> <a name="organization_conformance_pack_arn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackArn"></a>

```python
organization_conformance_pack_arn: str
```

- *Type:* str

---

##### `organization_conformance_pack_name`<sup>Required</sup> <a name="organization_conformance_pack_name" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackName"></a>

```python
organization_conformance_pack_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tags"></a>

```python
tags: DataAwsccConfigOrganizationConformancePackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList">DataAwsccConfigOrganizationConformancePackTagsList</a>

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_s3_uri`<sup>Required</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigOrganizationConformancePackConfig <a name="DataAwsccConfigOrganizationConformancePackConfig" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_organization_conformance_pack#id DataAwsccConfigOrganizationConformancePack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigOrganizationConformancePackConformancePackInputParameters <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters()
```


### DataAwsccConfigOrganizationConformancePackTags <a name="DataAwsccConfigOrganizationConformancePackTags" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters">DataAwsccConfigOrganizationConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigOrganizationConformancePackConformancePackInputParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters">DataAwsccConfigOrganizationConformancePackConformancePackInputParameters</a>

---


### DataAwsccConfigOrganizationConformancePackTagsList <a name="DataAwsccConfigOrganizationConformancePackTagsList" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConfigOrganizationConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConfigOrganizationConformancePackTagsOutputReference <a name="DataAwsccConfigOrganizationConformancePackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_conformance_pack

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags">DataAwsccConfigOrganizationConformancePackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigOrganizationConformancePackTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags">DataAwsccConfigOrganizationConformancePackTags</a>

---



