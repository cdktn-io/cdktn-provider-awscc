# `dataAwsccIotanalyticsPipeline` Submodule <a name="`dataAwsccIotanalyticsPipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsPipeline <a name="DataAwsccIotanalyticsPipeline" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_pipeline awscc_iotanalytics_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipeline(scope Construct, id *string, config DataAwsccIotanalyticsPipelineConfig) DataAwsccIotanalyticsPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig">DataAwsccIotanalyticsPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig">DataAwsccIotanalyticsPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipeline_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotanalyticsPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotanalyticsPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities">PipelineActivities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName">PipelineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PipelineActivities`<sup>Required</sup> <a name="PipelineActivities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities"></a>

```go
func PipelineActivities() DataAwsccIotanalyticsPipelinePipelineActivitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName"></a>

```go
func PipelineName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags"></a>

```go
func Tags() DataAwsccIotanalyticsPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsPipelineConfig <a name="DataAwsccIotanalyticsPipelineConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelineConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_pipeline#id DataAwsccIotanalyticsPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsPipelinePipelineActivities <a name="DataAwsccIotanalyticsPipelinePipelineActivities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivities {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannel <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilter <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambda <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesMath <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMath" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes {

}
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes {

}
```


### DataAwsccIotanalyticsPipelineTags <a name="DataAwsccIotanalyticsPipelineTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

&dataawscciotanalyticspipeline.DataAwsccIotanalyticsPipelineTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes">Attributes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes"></a>

```go
func Attributes() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName">DatastoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName"></a>

```go
func DatastoreName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName">ThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName"></a>

```go
func ThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName">ThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName"></a>

```go
func ThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName">LambdaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `LambdaName`<sup>Required</sup> <a name="LambdaName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName"></a>

```go
func LambdaName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesList <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotanalyticsPipelinePipelineActivitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get"></a>

```go
func Get(index *f64) DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math">Math</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Math`<sup>Required</sup> <a name="Math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math"></a>

```go
func Math() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesMath
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes">AddAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel">Channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore">Datastore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich">DeviceRegistryEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich">DeviceShadowEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math">Math</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes">RemoveAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes">SelectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddAttributes`<sup>Required</sup> <a name="AddAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes"></a>

```go
func AddAttributes() DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel"></a>

```go
func Channel() DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a>

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore"></a>

```go
func Datastore() DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a>

---

##### `DeviceRegistryEnrich`<sup>Required</sup> <a name="DeviceRegistryEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich"></a>

```go
func DeviceRegistryEnrich() DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a>

---

##### `DeviceShadowEnrich`<sup>Required</sup> <a name="DeviceShadowEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich"></a>

```go
func DeviceShadowEnrich() DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter"></a>

```go
func Filter() DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda"></a>

```go
func Lambda() DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a>

---

##### `Math`<sup>Required</sup> <a name="Math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math"></a>

```go
func Math() DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a>

---

##### `RemoveAttributes`<sup>Required</sup> <a name="RemoveAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes"></a>

```go
func RemoveAttributes() DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a>

---

##### `SelectAttributes`<sup>Required</sup> <a name="SelectAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes"></a>

```go
func SelectAttributes() DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes">Attributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes"></a>

```go
func Attributes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes">Attributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next">Next</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes"></a>

```go
func Attributes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next"></a>

```go
func Next() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---


### DataAwsccIotanalyticsPipelineTagsList <a name="DataAwsccIotanalyticsPipelineTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotanalyticsPipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotanalyticsPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotanalyticsPipelineTagsOutputReference <a name="DataAwsccIotanalyticsPipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticspipeline"

dataawscciotanalyticspipeline.NewDataAwsccIotanalyticsPipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotanalyticsPipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsPipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a>

---



