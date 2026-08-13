# `dataAwsccSchedulerSchedule` Submodule <a name="`dataAwsccSchedulerSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSchedulerSchedule <a name="DataAwsccSchedulerSchedule" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/scheduler_schedule awscc_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerSchedule(scope Construct, id *string, config DataAwsccSchedulerScheduleConfig) DataAwsccSchedulerSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig">DataAwsccSchedulerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig">DataAwsccSchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSchedulerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.DataAwsccSchedulerSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.DataAwsccSchedulerSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.DataAwsccSchedulerSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.DataAwsccSchedulerSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSchedulerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.flexibleTimeWindow">FlexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference">DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference">DataAwsccSchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `FlexibleTimeWindow`<sup>Required</sup> <a name="FlexibleTimeWindow" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.flexibleTimeWindow"></a>

```go
func FlexibleTimeWindow() DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference">DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.target"></a>

```go
func Target() DataAwsccSchedulerScheduleTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference">DataAwsccSchedulerScheduleTargetOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSchedulerScheduleConfig <a name="DataAwsccSchedulerScheduleConfig" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/scheduler_schedule#id DataAwsccSchedulerSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSchedulerScheduleFlexibleTimeWindow <a name="DataAwsccSchedulerScheduleFlexibleTimeWindow" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleFlexibleTimeWindow {

}
```


### DataAwsccSchedulerScheduleTarget <a name="DataAwsccSchedulerScheduleTarget" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTarget {

}
```


### DataAwsccSchedulerScheduleTargetDeadLetterConfig <a name="DataAwsccSchedulerScheduleTargetDeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetDeadLetterConfig {

}
```


### DataAwsccSchedulerScheduleTargetEcsParameters <a name="DataAwsccSchedulerScheduleTargetEcsParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParameters {

}
```


### DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy {

}
```


### DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration {

}
```


### DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration <a name="DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration {

}
```


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints {

}
```


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy {

}
```


### DataAwsccSchedulerScheduleTargetEventBridgeParameters <a name="DataAwsccSchedulerScheduleTargetEventBridgeParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetEventBridgeParameters {

}
```


### DataAwsccSchedulerScheduleTargetKinesisParameters <a name="DataAwsccSchedulerScheduleTargetKinesisParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetKinesisParameters {

}
```


### DataAwsccSchedulerScheduleTargetRetryPolicy <a name="DataAwsccSchedulerScheduleTargetRetryPolicy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetRetryPolicy {

}
```


### DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters <a name="DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters {

}
```


### DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct <a name="DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct {

}
```


### DataAwsccSchedulerScheduleTargetSqsParameters <a name="DataAwsccSchedulerScheduleTargetSqsParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

&dataawsccschedulerschedule.DataAwsccSchedulerScheduleTargetSqsParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference <a name="DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">MaximumWindowInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindow">DataAwsccSchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumWindowInMinutes`<sup>Required</sup> <a name="MaximumWindowInMinutes" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```go
func MaximumWindowInMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleFlexibleTimeWindow">DataAwsccSchedulerScheduleFlexibleTimeWindow</a>

---


### DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference <a name="DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfig">DataAwsccSchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfig">DataAwsccSchedulerScheduleTargetDeadLetterConfig</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy">DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy">DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration">AwsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsvpcConfiguration`<sup>Required</sup> <a name="AwsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```go
func AwsvpcConfiguration() DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetEcsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.launchType">LaunchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList">DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList">DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">TaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParameters">DataAwsccSchedulerScheduleTargetEcsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```go
func CapacityProviderStrategy() DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">DataAwsccSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```go
func EnableEcsManagedTags() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```go
func EnableExecuteCommand() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```go
func LaunchType() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```go
func PlacementConstraints() DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList">DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```go
func PlacementStrategy() DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList">DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```go
func PropagateTags() *string
```

- *Type:* *string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```go
func ReferenceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```go
func Tags() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```go
func TaskCount() *f64
```

- *Type:* *f64

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```go
func TaskDefinitionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParameters">DataAwsccSchedulerScheduleTargetEcsParameters</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```go
func Get(index *f64) DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints">DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints">DataAwsccSchedulerScheduleTargetEcsParametersPlacementConstraints</a>

---


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```go
func Get(index *f64) DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy">DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy">DataAwsccSchedulerScheduleTargetEcsParametersPlacementStrategy</a>

---


### DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference <a name="DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType">DetailType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParameters">DataAwsccSchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType"></a>

```go
func DetailType() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetEventBridgeParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParameters">DataAwsccSchedulerScheduleTargetEventBridgeParameters</a>

---


### DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference <a name="DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetKinesisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParameters">DataAwsccSchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParameters">DataAwsccSchedulerScheduleTargetKinesisParameters</a>

---


### DataAwsccSchedulerScheduleTargetOutputReference <a name="DataAwsccSchedulerScheduleTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference">DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.ecsParameters">EcsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.eventBridgeParameters">EventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference">DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference">DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference">DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters">SageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference">DataAwsccSchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTarget">DataAwsccSchedulerScheduleTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```go
func DeadLetterConfig() DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference">DataAwsccSchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `EcsParameters`<sup>Required</sup> <a name="EcsParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```go
func EcsParameters() DataAwsccSchedulerScheduleTargetEcsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEcsParametersOutputReference">DataAwsccSchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `EventBridgeParameters`<sup>Required</sup> <a name="EventBridgeParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.eventBridgeParameters"></a>

```go
func EventBridgeParameters() DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference">DataAwsccSchedulerScheduleTargetEventBridgeParametersOutputReference</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```go
func KinesisParameters() DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference">DataAwsccSchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference">DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SageMakerPipelineParameters`<sup>Required</sup> <a name="SageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters"></a>

```go
func SageMakerPipelineParameters() DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```go
func SqsParameters() DataAwsccSchedulerScheduleTargetSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference">DataAwsccSchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTarget">DataAwsccSchedulerScheduleTarget</a>

---


### DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference <a name="DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicy">DataAwsccSchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```go
func MaximumEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```go
func MaximumRetryAttempts() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetRetryPolicy">DataAwsccSchedulerScheduleTargetRetryPolicy</a>

---


### DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference <a name="DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList">PipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters">DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineParameterList`<sup>Required</sup> <a name="PipelineParameterList" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```go
func PipelineParameterList() DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters">DataAwsccSchedulerScheduleTargetSageMakerPipelineParameters</a>

---


### DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList <a name="DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```go
func Get(index *f64) DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### DataAwsccSchedulerScheduleTargetSqsParametersOutputReference <a name="DataAwsccSchedulerScheduleTargetSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccschedulerschedule"

dataawsccschedulerschedule.NewDataAwsccSchedulerScheduleTargetSqsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSchedulerScheduleTargetSqsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParameters">DataAwsccSchedulerScheduleTargetSqsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSchedulerSchedule.DataAwsccSchedulerScheduleTargetSqsParameters">DataAwsccSchedulerScheduleTargetSqsParameters</a>

---



