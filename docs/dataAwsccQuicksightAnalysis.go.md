# `dataAwsccQuicksightAnalysis` Submodule <a name="`dataAwsccQuicksightAnalysis` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightAnalysis <a name="DataAwsccQuicksightAnalysis" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_analysis awscc_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysis(scope Construct, id *string, config DataAwsccQuicksightAnalysisConfig) DataAwsccQuicksightAnalysis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig">DataAwsccQuicksightAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig">DataAwsccQuicksightAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.DataAwsccQuicksightAnalysis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.DataAwsccQuicksightAnalysis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.DataAwsccQuicksightAnalysis_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.DataAwsccQuicksightAnalysis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.analysisId">AnalysisId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dataSetArns">DataSetArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList">DataAwsccQuicksightAnalysisErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference">DataAwsccQuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList">DataAwsccQuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sheets">Sheets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList">DataAwsccQuicksightAnalysisSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference">DataAwsccQuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList">DataAwsccQuicksightAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.themeArn">ThemeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AnalysisId`<sup>Required</sup> <a name="AnalysisId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.analysisId"></a>

```go
func AnalysisId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DataSetArns`<sup>Required</sup> <a name="DataSetArns" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dataSetArns"></a>

```go
func DataSetArns() *[]*string
```

- *Type:* *[]*string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.errors"></a>

```go
func Errors() DataAwsccQuicksightAnalysisErrorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList">DataAwsccQuicksightAnalysisErrorsList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.parameters"></a>

```go
func Parameters() DataAwsccQuicksightAnalysisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference">DataAwsccQuicksightAnalysisParametersOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.permissions"></a>

```go
func Permissions() DataAwsccQuicksightAnalysisPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList">DataAwsccQuicksightAnalysisPermissionsList</a>

---

##### `Sheets`<sup>Required</sup> <a name="Sheets" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sheets"></a>

```go
func Sheets() DataAwsccQuicksightAnalysisSheetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList">DataAwsccQuicksightAnalysisSheetsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sourceEntity"></a>

```go
func SourceEntity() DataAwsccQuicksightAnalysisSourceEntityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference">DataAwsccQuicksightAnalysisSourceEntityOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tags"></a>

```go
func Tags() DataAwsccQuicksightAnalysisTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList">DataAwsccQuicksightAnalysisTagsList</a>

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.themeArn"></a>

```go
func ThemeArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightAnalysisConfig <a name="DataAwsccQuicksightAnalysisConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_analysis#id DataAwsccQuicksightAnalysis#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightAnalysisErrors <a name="DataAwsccQuicksightAnalysisErrors" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisErrors {

}
```


### DataAwsccQuicksightAnalysisParameters <a name="DataAwsccQuicksightAnalysisParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisParameters {

}
```


### DataAwsccQuicksightAnalysisParametersDateTimeParameters <a name="DataAwsccQuicksightAnalysisParametersDateTimeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters {

}
```


### DataAwsccQuicksightAnalysisParametersDecimalParameters <a name="DataAwsccQuicksightAnalysisParametersDecimalParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters {

}
```


### DataAwsccQuicksightAnalysisParametersIntegerParameters <a name="DataAwsccQuicksightAnalysisParametersIntegerParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters {

}
```


### DataAwsccQuicksightAnalysisParametersStringParameters <a name="DataAwsccQuicksightAnalysisParametersStringParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisParametersStringParameters {

}
```


### DataAwsccQuicksightAnalysisPermissions <a name="DataAwsccQuicksightAnalysisPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisPermissions {

}
```


### DataAwsccQuicksightAnalysisSheets <a name="DataAwsccQuicksightAnalysisSheets" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisSheets {

}
```


### DataAwsccQuicksightAnalysisSourceEntity <a name="DataAwsccQuicksightAnalysisSourceEntity" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisSourceEntity {

}
```


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplate <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplate" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate {

}
```


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences {

}
```


### DataAwsccQuicksightAnalysisTags <a name="DataAwsccQuicksightAnalysisTags" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

&dataawsccquicksightanalysis.DataAwsccQuicksightAnalysisTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightAnalysisErrorsList <a name="DataAwsccQuicksightAnalysisErrorsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisErrorsOutputReference <a name="DataAwsccQuicksightAnalysisErrorsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors">DataAwsccQuicksightAnalysisErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisErrors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors">DataAwsccQuicksightAnalysisErrors</a>

---


### DataAwsccQuicksightAnalysisParametersDateTimeParametersList <a name="DataAwsccQuicksightAnalysisParametersDateTimeParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersDateTimeParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisParametersDateTimeParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters">DataAwsccQuicksightAnalysisParametersDateTimeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisParametersDateTimeParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters">DataAwsccQuicksightAnalysisParametersDateTimeParameters</a>

---


### DataAwsccQuicksightAnalysisParametersDecimalParametersList <a name="DataAwsccQuicksightAnalysisParametersDecimalParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersDecimalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisParametersDecimalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters">DataAwsccQuicksightAnalysisParametersDecimalParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisParametersDecimalParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters">DataAwsccQuicksightAnalysisParametersDecimalParameters</a>

---


### DataAwsccQuicksightAnalysisParametersIntegerParametersList <a name="DataAwsccQuicksightAnalysisParametersIntegerParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersIntegerParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisParametersIntegerParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters">DataAwsccQuicksightAnalysisParametersIntegerParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisParametersIntegerParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters">DataAwsccQuicksightAnalysisParametersIntegerParameters</a>

---


### DataAwsccQuicksightAnalysisParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAnalysisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.dateTimeParameters">DateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList">DataAwsccQuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.decimalParameters">DecimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList">DataAwsccQuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.integerParameters">IntegerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList">DataAwsccQuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.stringParameters">StringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList">DataAwsccQuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters">DataAwsccQuicksightAnalysisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeParameters`<sup>Required</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```go
func DateTimeParameters() DataAwsccQuicksightAnalysisParametersDateTimeParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList">DataAwsccQuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `DecimalParameters`<sup>Required</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```go
func DecimalParameters() DataAwsccQuicksightAnalysisParametersDecimalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList">DataAwsccQuicksightAnalysisParametersDecimalParametersList</a>

---

##### `IntegerParameters`<sup>Required</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```go
func IntegerParameters() DataAwsccQuicksightAnalysisParametersIntegerParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList">DataAwsccQuicksightAnalysisParametersIntegerParametersList</a>

---

##### `StringParameters`<sup>Required</sup> <a name="StringParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```go
func StringParameters() DataAwsccQuicksightAnalysisParametersStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList">DataAwsccQuicksightAnalysisParametersStringParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters">DataAwsccQuicksightAnalysisParameters</a>

---


### DataAwsccQuicksightAnalysisParametersStringParametersList <a name="DataAwsccQuicksightAnalysisParametersStringParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisParametersStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisParametersStringParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisParametersStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisParametersStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters">DataAwsccQuicksightAnalysisParametersStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisParametersStringParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters">DataAwsccQuicksightAnalysisParametersStringParameters</a>

---


### DataAwsccQuicksightAnalysisPermissionsList <a name="DataAwsccQuicksightAnalysisPermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisPermissionsOutputReference <a name="DataAwsccQuicksightAnalysisPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions">DataAwsccQuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions">DataAwsccQuicksightAnalysisPermissions</a>

---


### DataAwsccQuicksightAnalysisSheetsList <a name="DataAwsccQuicksightAnalysisSheetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSheetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisSheetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisSheetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisSheetsOutputReference <a name="DataAwsccQuicksightAnalysisSheetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSheetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisSheetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.sheetId">SheetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets">DataAwsccQuicksightAnalysisSheets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SheetId`<sup>Required</sup> <a name="SheetId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.sheetId"></a>

```go
func SheetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisSheets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets">DataAwsccQuicksightAnalysisSheets</a>

---


### DataAwsccQuicksightAnalysisSourceEntityOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntityOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSourceEntityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAnalysisSourceEntityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity">DataAwsccQuicksightAnalysisSourceEntity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```go
func SourceTemplate() DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisSourceEntity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity">DataAwsccQuicksightAnalysisSourceEntity</a>

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```go
func DataSetPlaceholder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate">DataAwsccQuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```go
func DataSetReferences() DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate">DataAwsccQuicksightAnalysisSourceEntitySourceTemplate</a>

---


### DataAwsccQuicksightAnalysisTagsList <a name="DataAwsccQuicksightAnalysisTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAnalysisTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAnalysisTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAnalysisTagsOutputReference <a name="DataAwsccQuicksightAnalysisTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightanalysis"

dataawsccquicksightanalysis.NewDataAwsccQuicksightAnalysisTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAnalysisTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags">DataAwsccQuicksightAnalysisTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAnalysisTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags">DataAwsccQuicksightAnalysisTags</a>

---



