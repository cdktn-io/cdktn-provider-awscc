# `dataAwsccLogsMetricFilter` Submodule <a name="`dataAwsccLogsMetricFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLogsMetricFilter <a name="DataAwsccLogsMetricFilter" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.NewDataAwsccLogsMetricFilter(scope Construct, id *string, config DataAwsccLogsMetricFilterConfig) DataAwsccLogsMetricFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig">DataAwsccLogsMetricFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig">DataAwsccLogsMetricFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.DataAwsccLogsMetricFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.DataAwsccLogsMetricFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.DataAwsccLogsMetricFilter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.DataAwsccLogsMetricFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLogsMetricFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.emitSystemFieldDimensions">EmitSystemFieldDimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.filterName">FilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.metricTransformations">MetricTransformations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList">DataAwsccLogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplyOnTransformedLogs`<sup>Required</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.applyOnTransformedLogs"></a>

```go
func ApplyOnTransformedLogs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EmitSystemFieldDimensions`<sup>Required</sup> <a name="EmitSystemFieldDimensions" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.emitSystemFieldDimensions"></a>

```go
func EmitSystemFieldDimensions() *[]*string
```

- *Type:* *[]*string

---

##### `FieldSelectionCriteria`<sup>Required</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.fieldSelectionCriteria"></a>

```go
func FieldSelectionCriteria() *string
```

- *Type:* *string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.filterName"></a>

```go
func FilterName() *string
```

- *Type:* *string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MetricTransformations`<sup>Required</sup> <a name="MetricTransformations" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.metricTransformations"></a>

```go
func MetricTransformations() DataAwsccLogsMetricFilterMetricTransformationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList">DataAwsccLogsMetricFilterMetricTransformationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLogsMetricFilterConfig <a name="DataAwsccLogsMetricFilterConfig" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

&dataawscclogsmetricfilter.DataAwsccLogsMetricFilterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/logs_metric_filter#id DataAwsccLogsMetricFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLogsMetricFilterMetricTransformations <a name="DataAwsccLogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

&dataawscclogsmetricfilter.DataAwsccLogsMetricFilterMetricTransformations {

}
```


### DataAwsccLogsMetricFilterMetricTransformationsDimensions <a name="DataAwsccLogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

&dataawscclogsmetricfilter.DataAwsccLogsMetricFilterMetricTransformationsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLogsMetricFilterMetricTransformationsDimensionsList <a name="DataAwsccLogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.NewDataAwsccLogsMetricFilterMetricTransformationsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLogsMetricFilterMetricTransformationsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.NewDataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensions">DataAwsccLogsMetricFilterMetricTransformationsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLogsMetricFilterMetricTransformationsDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensions">DataAwsccLogsMetricFilterMetricTransformationsDimensions</a>

---


### DataAwsccLogsMetricFilterMetricTransformationsList <a name="DataAwsccLogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.NewDataAwsccLogsMetricFilterMetricTransformationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLogsMetricFilterMetricTransformationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.get"></a>

```go
func Get(index *f64) DataAwsccLogsMetricFilterMetricTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLogsMetricFilterMetricTransformationsOutputReference <a name="DataAwsccLogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclogsmetricfilter"

dataawscclogsmetricfilter.NewDataAwsccLogsMetricFilterMetricTransformationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLogsMetricFilterMetricTransformationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList">DataAwsccLogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricValue">MetricValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformations">DataAwsccLogsMetricFilterMetricTransformations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *f64
```

- *Type:* *f64

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccLogsMetricFilterMetricTransformationsDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsDimensionsList">DataAwsccLogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```go
func MetricNamespace() *string
```

- *Type:* *string

---

##### `MetricValue`<sup>Required</sup> <a name="MetricValue" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```go
func MetricValue() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLogsMetricFilterMetricTransformations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsMetricFilter.DataAwsccLogsMetricFilterMetricTransformations">DataAwsccLogsMetricFilterMetricTransformations</a>

---



