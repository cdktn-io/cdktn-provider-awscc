# `dataAwsccCleanroomsmlConfiguredModelAlgorithm` Submodule <a name="`dataAwsccCleanroomsmlConfiguredModelAlgorithm` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithm <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithm" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithm(scope Construct, id *string, config DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig) DataAwsccCleanroomsmlConfiguredModelAlgorithm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCleanroomsmlConfiguredModelAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCleanroomsmlConfiguredModelAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsmlConfiguredModelAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn">ConfiguredModelAlgorithmArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig">InferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig">TrainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConfiguredModelAlgorithmArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn"></a>

```go
func ConfiguredModelAlgorithmArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InferenceContainerConfig`<sup>Required</sup> <a name="InferenceContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig"></a>

```go
func InferenceContainerConfig() DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tags"></a>

```go
func Tags() DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList</a>

---

##### `TrainingContainerConfig`<sup>Required</sup> <a name="TrainingContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig"></a>

```go
func TrainingContainerConfig() DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

&dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanroomsml_configured_model_algorithm#id DataAwsccCleanroomsmlConfiguredModelAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

&dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTags <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

&dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

&dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

&dataawscccleanroomsmlconfiguredmodelalgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmTags</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithm"

dataawscccleanroomsmlconfiguredmodelalgorithm.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions"></a>

```go
func MetricDefinitions() DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithm.DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---



