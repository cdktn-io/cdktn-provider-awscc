# `dataAwsccPersonalizeMetricAttribution` Submodule <a name="`dataAwsccPersonalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPersonalizeMetricAttribution <a name="DataAwsccPersonalizeMetricAttribution" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.NewDataAwsccPersonalizeMetricAttribution(scope Construct, id *string, config DataAwsccPersonalizeMetricAttributionConfig) DataAwsccPersonalizeMetricAttribution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig">DataAwsccPersonalizeMetricAttributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig">DataAwsccPersonalizeMetricAttributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttribution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttribution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttribution_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttribution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPersonalizeMetricAttribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricAttributionArn">MetricAttributionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList">DataAwsccPersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricsOutputConfig">MetricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.datasetGroupArn"></a>

```go
func DatasetGroupArn() *string
```

- *Type:* *string

---

##### `MetricAttributionArn`<sup>Required</sup> <a name="MetricAttributionArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricAttributionArn"></a>

```go
func MetricAttributionArn() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metrics"></a>

```go
func Metrics() DataAwsccPersonalizeMetricAttributionMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList">DataAwsccPersonalizeMetricAttributionMetricsList</a>

---

##### `MetricsOutputConfig`<sup>Required</sup> <a name="MetricsOutputConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```go
func MetricsOutputConfig() DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPersonalizeMetricAttributionConfig <a name="DataAwsccPersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

&dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttributionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution#id DataAwsccPersonalizeMetricAttribution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPersonalizeMetricAttributionMetrics <a name="DataAwsccPersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

&dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttributionMetrics {

}
```


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfig <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

&dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig {

}
```


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

&dataawsccpersonalizemetricattribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPersonalizeMetricAttributionMetricsList <a name="DataAwsccPersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.NewDataAwsccPersonalizeMetricAttributionMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPersonalizeMetricAttributionMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get"></a>

```go
func Get(index *f64) DataAwsccPersonalizeMetricAttributionMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.NewDataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">S3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig">DataAwsccPersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3DataDestination`<sup>Required</sup> <a name="S3DataDestination" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```go
func S3DataDestination() DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPersonalizeMetricAttributionMetricsOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig">DataAwsccPersonalizeMetricAttributionMetricsOutputConfig</a>

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.NewDataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpersonalizemetricattribution"

dataawsccpersonalizemetricattribution.NewDataAwsccPersonalizeMetricAttributionMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPersonalizeMetricAttributionMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics">DataAwsccPersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPersonalizeMetricAttributionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics">DataAwsccPersonalizeMetricAttributionMetrics</a>

---



