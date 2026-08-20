# `dataAwsccRoute53GlobalresolverHostedZoneAssociation` Submodule <a name="`dataAwsccRoute53GlobalresolverHostedZoneAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverHostedZoneAssociation <a name="DataAwsccRoute53GlobalresolverHostedZoneAssociation" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_hosted_zone_association awscc_route53globalresolver_hosted_zone_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_hosted_zone_association#id DataAwsccRoute53GlobalresolverHostedZoneAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverHostedZoneAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverHostedZoneAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverHostedZoneAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53GlobalresolverHostedZoneAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_hosted_zone_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverHostedZoneAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneAssociationId">hosted_zone_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneName">hosted_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `hosted_zone_association_id`<sup>Required</sup> <a name="hosted_zone_association_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneAssociationId"></a>

```python
hosted_zone_association_id: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `hosted_zone_name`<sup>Required</sup> <a name="hosted_zone_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.hostedZoneName"></a>

```python
hosted_zone_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig <a name="DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_hosted_zone_association

dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverHostedZoneAssociation.DataAwsccRoute53GlobalresolverHostedZoneAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_hosted_zone_association#id DataAwsccRoute53GlobalresolverHostedZoneAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



