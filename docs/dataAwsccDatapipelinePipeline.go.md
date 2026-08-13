# `dataAwsccDatapipelinePipeline` Submodule <a name="`dataAwsccDatapipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatapipelinePipeline <a name="DataAwsccDatapipelinePipeline" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipeline(scope Construct, id *string, config DataAwsccDatapipelinePipelineConfig) DataAwsccDatapipelinePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig">DataAwsccDatapipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig">DataAwsccDatapipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipeline_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatapipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.activate">Activate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterObjects">ParameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList">DataAwsccDatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterValues">ParameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList">DataAwsccDatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineObjects">PipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList">DataAwsccDatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineTags">PipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList">DataAwsccDatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.activate"></a>

```go
func Activate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterObjects`<sup>Required</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterObjects"></a>

```go
func ParameterObjects() DataAwsccDatapipelinePipelineParameterObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList">DataAwsccDatapipelinePipelineParameterObjectsList</a>

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterValues"></a>

```go
func ParameterValues() DataAwsccDatapipelinePipelineParameterValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList">DataAwsccDatapipelinePipelineParameterValuesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `PipelineObjects`<sup>Required</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineObjects"></a>

```go
func PipelineObjects() DataAwsccDatapipelinePipelinePipelineObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList">DataAwsccDatapipelinePipelinePipelineObjectsList</a>

---

##### `PipelineTags`<sup>Required</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineTags"></a>

```go
func PipelineTags() DataAwsccDatapipelinePipelinePipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList">DataAwsccDatapipelinePipelinePipelineTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatapipelinePipelineConfig <a name="DataAwsccDatapipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelineConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datapipeline_pipeline#id DataAwsccDatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatapipelinePipelineParameterObjects <a name="DataAwsccDatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelineParameterObjects {

}
```


### DataAwsccDatapipelinePipelineParameterObjectsAttributes <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes {

}
```


### DataAwsccDatapipelinePipelineParameterValues <a name="DataAwsccDatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelineParameterValues {

}
```


### DataAwsccDatapipelinePipelinePipelineObjects <a name="DataAwsccDatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelinePipelineObjects {

}
```


### DataAwsccDatapipelinePipelinePipelineObjectsFields <a name="DataAwsccDatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields {

}
```


### DataAwsccDatapipelinePipelinePipelineTags <a name="DataAwsccDatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

&dataawsccdatapipelinepipeline.DataAwsccDatapipelinePipelinePipelineTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatapipelinePipelineParameterObjectsAttributesList <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterObjectsAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelineParameterObjectsAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes">DataAwsccDatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelineParameterObjectsAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes">DataAwsccDatapipelinePipelineParameterObjectsAttributes</a>

---


### DataAwsccDatapipelinePipelineParameterObjectsList <a name="DataAwsccDatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelineParameterObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelineParameterObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelineParameterObjectsOutputReference <a name="DataAwsccDatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelineParameterObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList">DataAwsccDatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects">DataAwsccDatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```go
func Attributes() DataAwsccDatapipelinePipelineParameterObjectsAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList">DataAwsccDatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelineParameterObjects
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects">DataAwsccDatapipelinePipelineParameterObjects</a>

---


### DataAwsccDatapipelinePipelineParameterValuesList <a name="DataAwsccDatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelineParameterValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelineParameterValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelineParameterValuesOutputReference <a name="DataAwsccDatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelineParameterValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelineParameterValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues">DataAwsccDatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelineParameterValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues">DataAwsccDatapipelinePipelineParameterValues</a>

---


### DataAwsccDatapipelinePipelinePipelineObjectsFieldsList <a name="DataAwsccDatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineObjectsFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelinePipelineObjectsFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">RefValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields">DataAwsccDatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```go
func RefValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelinePipelineObjectsFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields">DataAwsccDatapipelinePipelinePipelineObjectsFields</a>

---


### DataAwsccDatapipelinePipelinePipelineObjectsList <a name="DataAwsccDatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelinePipelineObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelinePipelineObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelinePipelineObjectsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelinePipelineObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList">DataAwsccDatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects">DataAwsccDatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```go
func Fields() DataAwsccDatapipelinePipelinePipelineObjectsFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList">DataAwsccDatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelinePipelineObjects
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects">DataAwsccDatapipelinePipelinePipelineObjects</a>

---


### DataAwsccDatapipelinePipelinePipelineTagsList <a name="DataAwsccDatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatapipelinePipelinePipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatapipelinePipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatapipelinePipelinePipelineTagsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatapipelinepipeline"

dataawsccdatapipelinepipeline.NewDataAwsccDatapipelinePipelinePipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatapipelinePipelinePipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags">DataAwsccDatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatapipelinePipelinePipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags">DataAwsccDatapipelinePipelinePipelineTags</a>

---



