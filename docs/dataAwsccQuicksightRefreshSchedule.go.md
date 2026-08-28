# `dataAwsccQuicksightRefreshSchedule` Submodule <a name="`dataAwsccQuicksightRefreshSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightRefreshSchedule <a name="DataAwsccQuicksightRefreshSchedule" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_refresh_schedule awscc_quicksight_refresh_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.NewDataAwsccQuicksightRefreshSchedule(scope Construct, id *string, config DataAwsccQuicksightRefreshScheduleConfig) DataAwsccQuicksightRefreshSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig">DataAwsccQuicksightRefreshScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig">DataAwsccQuicksightRefreshScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightRefreshSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightRefreshSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightRefreshSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference">DataAwsccQuicksightRefreshScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.schedule"></a>

```go
func Schedule() DataAwsccQuicksightRefreshScheduleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference">DataAwsccQuicksightRefreshScheduleScheduleOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightRefreshScheduleConfig <a name="DataAwsccQuicksightRefreshScheduleConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

&dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshScheduleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_refresh_schedule#id DataAwsccQuicksightRefreshSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightRefreshScheduleSchedule <a name="DataAwsccQuicksightRefreshScheduleSchedule" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

&dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshScheduleSchedule {

}
```


### DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency <a name="DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

&dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency {

}
```


### DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay <a name="DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

&dataawsccquicksightrefreshschedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightRefreshScheduleScheduleOutputReference <a name="DataAwsccQuicksightRefreshScheduleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.NewDataAwsccQuicksightRefreshScheduleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightRefreshScheduleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.refreshType">RefreshType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.scheduleId">ScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime">StartAfterDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleSchedule">DataAwsccQuicksightRefreshScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshType`<sup>Required</sup> <a name="RefreshType" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.refreshType"></a>

```go
func RefreshType() *string
```

- *Type:* *string

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency"></a>

```go
func ScheduleFrequency() DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a>

---

##### `ScheduleId`<sup>Required</sup> <a name="ScheduleId" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.scheduleId"></a>

```go
func ScheduleId() *string
```

- *Type:* *string

---

##### `StartAfterDateTime`<sup>Required</sup> <a name="StartAfterDateTime" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime"></a>

```go
func StartAfterDateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightRefreshScheduleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleSchedule">DataAwsccQuicksightRefreshScheduleSchedule</a>

---


### DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference <a name="DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.NewDataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay">RefreshOnDay</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay">TimeOfTheDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `RefreshOnDay`<sup>Required</sup> <a name="RefreshOnDay" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay"></a>

```go
func RefreshOnDay() DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a>

---

##### `TimeOfTheDay`<sup>Required</sup> <a name="TimeOfTheDay" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay"></a>

```go
func TimeOfTheDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequency</a>

---


### DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference <a name="DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightrefreshschedule"

dataawsccquicksightrefreshschedule.NewDataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightRefreshSchedule.DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">DataAwsccQuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---



